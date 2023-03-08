# A card is used to show different task 
import datetime
class Card:
    # fields in the class
    __title = ""
    __descrption = ""
    __due_date = "" #use datetime class in python
    __hour_needed = 0
    __isPriorized = False
    __assigned_users = [] # a list of users which the work is assigned to 
    
    #constructor 
    def __init__(self, title,description = "",hour_needed = 0,isPriorized = False,assigned_users = []):
        self.__title = title
        self.__description = description
        self.__hour_needed = hour_needed
        self.__isPriorized = isPriorized
        self.__assigned_users = assigned_users
    def __repr__(self):
        return ""
    def __str__(self):
        return "Card(" + self.__title + ", " + str(self.__hour_needed) + " hr)"
    #public methods
    def change_title(self, title):
        self.__title = title
    def change_description(self, description):
        self.__descrption = description
    def change_hour_needed(self, hour):
        self.__hour_needed = hour
    def change_priority(self, isPrioritized):
        self.__isPrioritized = isPrioritized
    # add a single user or multiple users in a list
    def assigned_users(self, users):
        if type(users) == list:
            for user in users:
                #throw errors needed if adding repeated users or user not found(undone) 
                self.__users.append(user)
        else:
            #add single user
            self.__users.append(users)
            
                
        
        
def main():
    card_1 = Card("Task_1", 5)
    print(card_1)
    
main()