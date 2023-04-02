How to Access data from this Database <3
Make sure you have the mysql-connector package. If you don't, run 
pip install mysql-connector-python

In a different tab, run 

ssh -L localhost:03306:localhost:03306 cslusername@cs506-team-43.cs.wisc.edu

	Replace USERNAME with your csl login username. Enter your csl password and dual
	authenticate.

Look at the Queries section in this doc as well as the main function in the sql-connect.py file to understand how to access data. I’d recommend not sending in your own query, but rather asking me to implement it.

Queries 
The functions are added to the class directly for simplicity and function signatures are given. Black ones are complete. 

When sending queries to add new rows (7-11), remember that everything that is not null in the schema (above) HAS to be sent in as args. 

I’ve added a non exhaustive list of checks to some of the queries. DO THESE CHECKS BEFORE SENDING IN DATA.

Manisha!!

Send in your own query
def execute_query(self, query):

Get all cards in a project
def all_cards_by_proj(self, pnum):

Get all tasks in a project (different because cards demand a subset of all the task attributes)
Get all users on a task
Get all users in a project
Get all tasks in a project by status
Create new task
	Check if pnum exists before creating a task
Create new user
Assign user to task
	Stop users from assigning themselves to tasks they’re not on the team for
	Check if users exist before assigning
Create new project (this is done by assigning a name to the project)
Assign users to the project (added to the “team” table)
	Check if users exist before adding to team

ER Model

Quick Explanation of ER models






Model of our database



Tables

Task/Card
TaskNum
PNum
Title
Desc
DueDate
Hours
Priority
Status
1
1
Research
…
3/4/23
3
low
Unassigned
2
1
Read chptr
…
3/7/23
1
medium
InProgress



Project
PNum
Name
1
AGDev43
2
WebsiteCreation



User
Email
Username
abc@gmail.com
abc
def@gmail.com
def



Team
Email
PNum
abc@gmail.com
1
def@gmail.com
1

	

Assigned
Email
TaskNum
abc@gmail.com
1
def@gmail.com
2


Schema






Required Edits/Questions (only for Cas)
IsPrioritised->Priority (low, med, high)
Tables with no primary key??
Sprint numbers!!!
Date created
Createdby
Autoincrement
Improve query strings
How do errors return?
