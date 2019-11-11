# sloperAPI
a server that returns sloper cad drawings to make different dresses


# Backlog
SPIKE 003  CREATE MEASUREMENT CLASS AND MEASUREMENT TYPE CLASS (5PTS) DONE

MEAS004 create plotting system (5pts) DONE

MEAS002 write sloper class comprised of all measurementsa and their converted measurements (3PTS) IN PROGRESS
MEAS003 define all measurements in library or bodice functionality (5PTS) IN PROGRESS

MEAS004 define method to handle french curves and implement french curve functionality 
MEAS004 use curve fn to define dart legs in test pattern
MEAS005 begin testing

## MEASUREMENT CLASS TYPES SPIKE 003 / MEAS003
A. center front bodice length, center back bodice length
B. full length: front back
C. Shoulder slope: front, back
D. strap: front back
E. bust depth
F. bust span
G. side length
H. shoulder length
I. Across shoulder front back
J. across chest 
K. across back
L. bust arc
M. back arc
N. waist arc
O. Dart replacement
P. Abdomen Arc
Q. Hip Arc
R. Crotch Depth
S. front hip depth
T. side hip depth
U. waist to kneee to ankle, to floor
V. upper thigh circumference
W. mid-thigh circumference
X. knee circumerence
Y. calf circumference
Z. ankle circumference

## CONVERT METHOD MEAS001
method sits on measurement class and takes a measurment type object that has already defined the covnersion required and applies it to the following measurement and returns it. 

## WRITE SLOPER CLASS MEAS002
comprises all original measurments and the converted values in a dictionary

# concept inspiration

## Marketing Story
a way to make clothing responsible, affordable and sustainable.

## Metaphors
project sloper is like a maker studio for designers
project sloper is like a rapid prototyping consultant
project sloper is like the west coast customz of fashionistas without the clunker
project sloper is not like west coast customz because quality is the upmost importance
project sloper makes a product that is like a second skin to their user

## StoryBoarding
### users
people who are interested in tailored rapidly printed clothing.
designers, fashionistas, people with high financial liquidity, aka doctors lawyers and salarymen. 

Christine - risk and finance, employee and jpmc. married with kids and has a wealthy living. She likes made to measure clothing because it is quick and easy to get the look he wants. her clothing helps her land deals and she relies on us to look her best

Lauren - paralegal, single. enjoys wearing custom and designer fasion. she has other peices in her wardrobe besides M2M, but will indulge a few peices every year. M2m as a product is a little our of her price point, but she enjoys the experience for it's novelty.

Joy - Designer, dress maker for a fasion house
Joy jr - Designer, small time dress maker

paraphrasing from Harrison's buisness plan
clients like christine and lauren will rely on M2m's speed and accuracy at making a garment that is fit to their body like a second skin, and access to the design process of making the peice that they will show off in public. the client would then pick up their dress next day, or it could be mailed/ sent via courier to their home address. to push for local tiered pricing that would incentivize locals to purchase the clothing or visit the store.

## user stories

As 
Christine, 
Lauren,
I want clothing that is custom made to my measurements.

As 
Lauren, 
Christine 
I want to tap into the local garment scene

As 
Christine,
Joy,
Joy Jr,
I want the ability to deeply customize my dress

As 
Lauren
I want the ability to replace a pattern or several patterns
on a garment from the store, or an older garment.

As 
Joy jr,
Lauren,
Christine,
Joy,
I want the ability to create a vision i had for my product line

As 
Joy 
I want the ability to rapid prototype multiple orders in tandem, and change orders based on previous design critique

As, 
christine, 
Joy,
Joy jr,
Lauren,
I want digital place to request my measurements from a database

As, 
christine, 
Joy,
Joy jr,
Lauren,
I want to be digitally measured by a camera system due to the fact that i get more privacy, and the digital model created from it.


As, 
christine, 
Joy,
Joy jr,
Lauren,
I want the ability to fabricate in the same store is was measured in to make the shopping experience easier and i can track the dresses progress. 


As, 
christine, 
Joy,
Joy jr,
Lauren,
I want the ability to come for an apointment or walk in


As, 
christine, 
Joy,
Joy jr,
Lauren,
I want the ability to get my product fully assembled or in patterns with instructions

# ProtoDesign
multi camera apparatus the employs computer vision to collect a series of 26 body measurment to create a digital 3d model. 
this= model could be brought into an app called clo for computer design, or a series of patterns and partial slopers could be brought out as work samples for initial design. 

a sloper API will provide a client app with the corresponding cad files required to print patterns in a zip file. the sloper API only has one api, a post. the sloper API will also connect to a db microservice that stores all the measurements for a user

user and measurements db
stores all measurements for a user in a transactional style db schema. could also store payments or we could employ shopify as a client gui

shopify gui app
client gui to handle payment and accept measurements and email contact info. also connected to sloper api and measurements db. 

computer vision measurement system. 
the software side of the camera apparatus. will stitch together different camera streams from multicamera setup, and will collect measurements from video data stream to be sent to the measurements db. 

fabrication equipment

# thesis statement
By combining computer vision and algorythmic drafting, we can create a simplified model that can be used for highly accurate made to measure pattern making, and be implemented as a fasion and smart garment prototyping tool. 

# Must have
must have a measurment system that has no person to person touch invovled.
computer vision
autocad draft files in 2-d
measurements must be as precise as hand measurements at 90%
simplified model
    must have 26 points of contact minimum on mocap suit

# nice to have
measurement system has minimal contact.
a system to verify the measurement is correct before client buys pattern


# wont have
wont have luxury prices
3d for alpha or beta
no health monitoring like mamograms
# Design Parameters
TBD

# design limitations
$ dollar amount for a brick and mortar.
if measurement system can't accurately measure within an inch of the correct measurement, then it is unaceptable

