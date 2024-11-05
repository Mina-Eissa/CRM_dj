import pymysql

def create_new_user(admin_user, admin_password, new_user='CRMDB_USER', new_password='CRMDB_PASS', host='localhost', database='CRMDB'):
    connection = None
    try:
        # Connect to MySQL as an admin user
        connection = pymysql.connect(
            host=host,
            user=admin_user,
            password=admin_password
        )

        if connection.open:
            cursor = connection.cursor()
            # Create a new database for project use 
            cursor.execute(f"CREATE DATABASE IF NOT EXISTS {database}")
            connection.commit()
            
            # Create new user with password and set authentication plugin
            cursor.execute(
                f"CREATE USER IF NOT EXISTS '{new_user}'@'{host}' IDENTIFIED BY '{new_password}';"
            )

            # Grant privileges (e.g., full access to a specific database)
            if database:
                cursor.execute(
                    f"GRANT ALL PRIVILEGES ON {database}.* TO '{new_user}'@'{host}';"
                )
            else:
                cursor.execute(
                    f"GRANT ALL PRIVILEGES ON *.* TO '{new_user}'@'{host}';"
                )

            # Apply the changes
            cursor.execute("FLUSH PRIVILEGES;")
            print(f"User '{new_user}' created successfully with access to database '{database}'" if database else f"User '{new_user}' created successfully with full access.")

    except pymysql.MySQLError as e:
        print(f"Error: {e}")

    finally:
        # Close the connection
        if connection and connection.open:
            cursor.close()
            connection.close()


# Usage
admin_user = 'root'
admin_password = str(input('Enter admin password: '))
new_user = 'CRMDB_USER'
new_password = 'CRMDB_PASS'
host = str(input('Enter hostname (default is localhost): ') or 'localhost')
database = 'CRMDB'

create_new_user(admin_user, admin_password, new_user, new_password, host, database)



# import pymysql

# connection = pymysql.connect(host='localhost',
#                              user='root',
#                              password='1234',
#                             )

# try:
#     with connection.cursor() as cursor:
#         sql = "CREATE DATABASE CRMDB"
#         cursor.execute(sql)
#         print("Database created successfully")
# finally:
#     connection.close()

# import mysql.connector

# DBconection = mysql.connector.connect(
#     host='localhost',
#     user='root',
#     passwd='1234',
# )
# cursor = DBconection.cursor()
# cursor.execute('CREATE DATABASE CRMDB')
# print("Database created successfully")
