import mysql.connector              #pip install mysql-connector-python
from mysql.connector import errorcode
import json
from datetime import date, datetime

# JSON serializer for objects not serializable by default json code
def json_serial(obj):
  if isinstance(obj, (datetime, date)):
    return obj.isoformat()
  raise TypeError ("Type %s not serializable" % type(obj))

class DBAccess:

  def __init__(self):
    try:
      self.cnx = mysql.connector.connect(user='root', password='mc', host='localhost', port=3306, database='AGDev43')
      self.cursor = self.cnx.cursor(dictionary=True)
    except mysql.connector.Error as err:
      if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Something is wrong with your user name or password")
      elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database does not exist")
      else:
        print(err)
    else:
      self.cursor = self.cnx.cursor(dictionary=True)
  
  def execute_query(self, query):
    dictionary = []

    self.cursor.execute(query)
    for row in self.cursor:
      dictionary.append(row)

    jsonret = json.dumps(dictionary, indent=2, default=json_serial)

    return(jsonret)

  def __del__(self):
    self.cursor.close() 
    self.cnx.close()

def main():
  # Query string
  q_all_cards_by_proj = "select Title, DueDate, Hours, Priority, Status from Task where PNum = {:d};"
  db = DBAccess()
  jsonret = db.execute_query(q_all_cards_by_proj.format(1))
  print(jsonret)

if __name__ == "__main__":
  main()