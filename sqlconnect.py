import mysql.connector              #pip install mysql-connector-python
from mysql.connector import errorcode

try:
  cnx = mysql.connector.connect(user='root', password='mc', host='localhost', port=63306, database='ThisAndThat')
except mysql.connector.Error as err:
  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    print("Something is wrong with your user name or password")
  elif err.errno == errorcode.ER_BAD_DB_ERROR:
    print("Database does not exist")
  else:
    print(err)
else:
  cursor = cnx.cursor()

  query = ("select *from This")

  cursor.execute(query)

  for (int1, str1, int2, date, str2) in cursor:
    print("Int - {}, String - {}, Int - {}, Date - {:%d %b %Y}, String - {}".format(int1, str1, int2, date, str2))

  cursor.close() 
  cnx.close()