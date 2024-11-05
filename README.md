# CRM_dj

A CRM project designed to practice Django with a MySQL database setup.

## Prerequisites

- Python (latest version)
- MySQL DBMS

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/CRM_dj.git
cd CRM_dj
```
### 2. Install Required Libraries

To install all necessary libraries, use the requirements.txt file:

```bash
pip install -r requirements.txt
```
### 3.Install MySQL DBMS

If MySQL is not installed on your machine, download and install it from the MySQL official website(https://dev.mysql.com/downloads/).

### 4.Setup the Database

Create a MySQL database and user for the CRM project by running
```bash
python CRMDB.py
```
And you will give the admin_password and host if you are using different host from (localhost).

### 5.Run the Django Project
```bash
python manage.py runserver
```