#!/usr/bin/python3
"""
This script connects to a MySQL database and retrieves all records from the
'states' table in ascending order by 'id'. It requires three command line
arguments: MySQL username, MySQL password, and the database name.

Usage:
    ./0-select_states.py <mysql_username> <mysql_password> hbtn_0e_0_usa
"""

import MySQLdb
import sys

def main():
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    try:
        db = MySQLdb.connect(host="localhost", user=username, passwd=password, db=database, port=3306)
        cursor = db.cursor()
        cursor.execute("SELECT * FROM states ORDER BY id ASC")
        results = cursor.fetchall()

        for state in results:
            print(state)
    except MySQLdb.Error as e:
        print(f"Error: {e}")
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()

if __name__ == "__main__":
    main()
