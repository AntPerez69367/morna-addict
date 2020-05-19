import sqlite3
import time

def currentTime():
    return time.strftime('%m-%d-%Y_%H%M', time.localtime())


print("[%s] Starting Daily Reset".format(currentTime()))
db_file = r'./mornatk.db'
connection = None
try:
    print("[%s] Connecting to Database".format(currentTime()))
    connection = sqlite3.connect(db_file)
except Exception as e:
    print("[%s] Error Connecting to Database".format(currentTime()))
    print(e)

if connection is not None:
    print("[%s] Resetting DailyXP".format(currentTime()))
    sql = ''' UPDATE players SET daily = 0'''
    cur = connection.cursor()
    cur.execute(sql)
    connection.commit()
    connection.close


print("[%s] Daily Reset Complete".format(%currentTime()))