from datetime import datetime
import math


in_time_str = input('\nPlease enter the time in (HH:MM): ')
out_time_str = input('\nPlease enter the time out (HH:MM): ')
free_time_str = input('\nPlease enter the free time (in minutes): ')
detention_percentage = input('\nPlease enter the detention percentage: ')

TIME_RANGE = 15
DETENTION_CHARGE = 45

def det_calculation():
    global actual_detention
    in_time = datetime.strptime(in_time_str, "%H:%M")
    out_time = datetime.strptime(out_time_str, "%H:%M")

    effective_time = (out_time - in_time).total_seconds() / 60 - int(free_time_str)

    effective_fractions = math.ceil(effective_time / TIME_RANGE)

    total_detention = effective_fractions * DETENTION_CHARGE

    actual_detention = total_detention * float(detention_percentage) / 100

    input(f"\n\t💸 Detention amount: ${actual_detention}")

    input("\nPress enter to quit...")



if __name__ == "__main__":
    det_calculation()
    
