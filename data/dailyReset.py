import sqlite3
import time

def currentTime():
    return time.strftime('%m-%d-%Y_%H%M', time.localtime())


print("[{0}] Starting Daily Reset".format(currentTime()))
db_file = r'./mornatk.db'
connection = None
try:
    print("[{0}] Connecting to Database".format(currentTime()))
    connection = sqlite3.connect(db_file)
except Exception as e:
    print("[{0}] Error Connecting to Database".format(currentTime()))
    print(e)

if connection is not None:
    print("[{0}] Resetting DailyXP".format(currentTime()))
    sql = ''' UPDATE players SET daily = 0'''
    cur = connection.cursor()
    cur.execute(sql)
    connection.commit()
    connection.close


print("[{0}] Daily Reset Complete".format(currentTime()))
