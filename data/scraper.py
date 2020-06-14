import requests
import pandas as pd
import re
import json
import math
import sqlite3
import time


def currentTime():
    return time.strftime('%m-%d-%Y_%H%M', time.localtime())

def create_connection(db_file):
    connection = None
    try:
        connection = sqlite3.connect(db_file)
        return connection
    except Exception as e:
        print(e)
    
    return connection

def create_table(connection, create_table_sql):
    try:
        c = connection.cursor()
        c.execute(create_table_sql)
    except Exception as e:
        print(e)

def update_player(connection, player):
    cur = connection.cursor()
    cur.execute("SELECT * FROM players WHERE name = ?", (player['Character'].title(),))
    data = cur.fetchall()
    print(data)
    if len(data)==0:

        data = (player['Level'],player['Class'],player['Character'].title(),player['Vita'],player['Mana'],player['TotalXP'],0, player['Clan'])    
        sql = ''' INSERT INTO players(level,class,name,vita,mana,totalXP,daily,clan)
                  VALUES(?,?,?,?,?,?,?,?) '''
        
        print("[{0}] Adding player '{1}' to the database: {2}".format(currentTime(), player['Character'], data))
        cur.execute(sql, data)
    else:
        
        oldTotalXP = data[0][6]
        newTotalXP = player['TotalXP']
        difference = newTotalXP - oldTotalXP
        daily = data[0][7] + difference
        
        # Check fo Clan Change
        if player['Clan'] != data[0][8]:
            print("[{0}] Player '{1}' changed clan from: {2} to {3}".format(currentTime(), player['Character'], data[0][8], player['Clan']))
            newClan = ''' UPDATE players
                  SET clan = ?
                  WHERE id = ? '''

            cur.execute(newClan, (player['Class'], data[0][0]))
            connection.commit()

        # Check for Class Change
        if player['Class'] != data[0][2]:
            print("[{0}] Player '{1}' changed class from: {2} to {3}".format(currentTime(), player['Character'], data[0][2], player['Class']))
            newClass = ''' UPDATE players
                  SET class = ?
                  WHERE id = ? '''
            cur.execute(newClass, (player['Class'], data[0][0]))
            connection.commit()

        # Check for Stat Change
        if difference != 0:
            if daily > 0:
                print("[{0}] Updating Character '{1}' DailyXP is now '{2}'".format(currentTime(), player['Character'], daily))
            data = (player['Vita'], player['Mana'], player['Class'], newTotalXP, daily, data[0][0])
            sql = ''' UPDATE players
                  SET vita = ?,
                  mana = ?,
                  class = ?,
                  totalXP = ?,
                  daily = ?
                  WHERE id = ? '''

            cur.execute(sql, data)
            connection.commit()
    
    return cur.lastrowid


def get_character_data(connection):
    classes = ['World', 'Fighter', 
    'Dragonborn', 'Hwarang', 'Paladin', 'Berserker',
    'Scoundrel',
    'Shadow', 'Ranger', 'Bard', 'Spellthief',
    'Wizard',
    'Phoenix', 'Vampire', 'Warlock', 'Arch Magi',
    'Priest',
    'Bishop', 'Druid', 'Medic', 'Crusader']

    for path in classes:
        print("[{0}] Scraping '{1}' Data".format(currentTime(),path))
        url = 'https://www.mornatales.com/rankings/?class={0}'.format(path)
        r = requests.get(url)
        table = pd.read_html(r.content)[0]
        playerData = table.to_dict('records')

        for player in playerData:
            # Remove Ranking and title from Character String
            name = player['Character']
            output = re.sub(r'\d+\. ', '', name)

            player['Title'] = output.rsplit(
                ' ', 1)[0] if len(output.split()) > 1 else ""
            player['Character'] = output.split()[-1]

            # Format Vita without units
            newVita = player['Vita']
            newVita = float(newVita[:-1])
            player['Vita'] = int(newVita * 1000)

            # Format Mana without units
            newMana = player['Mana']
            newMana = float(newMana[:-1])
            player['Mana'] = int(newMana * 1000)

            # Calculate TotalXP
            totalXP = 0
            vita = player['Vita']
            mana = player['Mana']
            numOfSells = 0
            costPerSell = 20000000
            vita -= 100000
            totalXP += 1000 * costPerSell
            while vita > 0:
                multiplier = math.floor(numOfSells/200) + 1
                numOfSells += 1
                vita -= 100
                totalXP += costPerSell + (multiplier * 2000000)

            numOfSells = 0
            mana -= 50000
            totalXP += 1000 * costPerSell
            while mana > 0:
                multiplier = math.floor(numOfSells/200) + 1
                numOfSells += 1
                mana -= 50
                totalXP += costPerSell + (multiplier * 2000000)

            player['TotalXP'] = totalXP

            update_player(connection,player)

    # jstr = json.dumps(playerData, ensure_ascii=False, indent=4)
    # df = pd.read_json(jstr)
    # export_csv = df.to_csv('playerData.csv')

def main():
    database = r"./mornatk.db"
    sql_create_player_table = """ CREATE TABLE IF NOT EXISTS players (
                                        id integer PRIMARY KEY,
                                        level integer,
                                        class text NOT NULL,
                                        name text NOT NULL,
                                        vita integer,
                                        mana integer,
                                        totalXP integer,
                                        daily integer,
                                        clan text NOT NULL
                                    ); """

    connection = create_connection(database)

    if connection is not None:
        # create player table 
        create_table(connection, sql_create_player_table)
        get_character_data(connection)
        connection.commit()
        connection.close()
        print("[{0}] Scraping Complete".format(currentTime()))
    else:
        print("Exception: Cannot connect to the database.")


if __name__ == '__main__':
    main()