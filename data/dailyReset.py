import sqlite3

db_file = r'./mornatk.db'
connection = None
try:
    connection = sqlite3.connect(db_file)
except Exception as e:
    print(e)

if connection is not None:
    sql = ''' UPDATE players SET daily = 0'''
    cur = connection.cursor()
    cur.execute(sql)
    connection.commit()
    connection.close

print("Daily Reset")