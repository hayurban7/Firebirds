CREATE DATABASE oconeefiredb;

USE oconeefiredb;
Drop table if exists Certification_Details;
Drop table if exists Members;
Drop table if exists Certifications;


CREATE TABLE Members

             (Member_ID INT NOT NULL Primary key auto_increment,

             First_Name          VARCHAR(25)    NOT NULL,

              Last_Name        VARCHAR(25)    NOT NULL,

              Title     VARCHAR(30)    NOT NULL,

              Gender   VARCHAR(10)            NOT NULL,

              MemberStreet     VARCHAR(20)    NOT NULL,

              MemberCity        VARCHAR(20)    NOT NULL,

              MemberState       CHAR(2)         NOT NULL,

              MemberZipCode     VARCHAR(10)    NOT NULL,

              MemberPhone VARCHAR(11),

              Radio  VARCHAR(10)    NOT NULL,

              Station VARCHAR(25) NOT NULL,

              IsActive BOOLEAN NOT NULL,

              Secondary_Phone  VARCHAR(11)
);

INSERT INTO Members VALUES (1,"Kathryn","Pryde","Chief","Female","1123 Xavier School Drive","Watkinsville","GA","30677","7075551234","A-1","0",1,"7075552345");
INSERT INTO Members VALUES (2,"Piotr", "Rasputin","Mr","Male","A31 Mother Russia Road","Seattle","WA","98133",null,"841","8",1,"2065559876");
INSERT INTO Members VALUES (3,"Warren", "Worthington III","Mr","Male","1140 Expiriment Station Road","Watkinsville","GA","30677","7065553945","122","1",1,null);





CREATE TABLE Certifications

             (Certification_ID  INT NOT NULL Primary key auto_increment,

	            Certificate_Name    VARCHAR(100)    NOT NULL,

              Exp_period INT
);
INSERT INTO Certifications VALUES (1,"CPR (CPR for Healthcare Providers/American Heart Association)", 2);
INSERT INTO Certifications VALUES (2,"CPR (CPR for the Professional Rescuer/American Red Cross)", 2);
INSERT INTO Certifications VALUES (3,"Firefighter I (Athens Technical College)", 3);
INSERT INTO Certifications VALUES (4,"Firefighter I (Ivy Technical College)",3);
INSERT INTO Certifications VALUES (5,"POST (Georgia POST Academy)",5);
INSERT INTO Certifications VALUES (6,"HAZMAT",2);
INSERT INTO Certifications VALUES (7,"Extrication",null);
INSERT INTO Certifications VALUES (8,"EMT-Adv",2);
INSERT INTO Certifications VALUES (9,"Due Regard",1);
INSERT INTO Certifications VALUES (10,"Paramedic", 3);
INSERT INTO Certifications VALUES (11,"Firefighter II",2);

CREATE TABLE Certification_Details

             (Member_Cert_ID INT NOT NULL Primary key auto_increment,

              Member_ID          INT    NOT NULL,

              Certification_ID            INT    NOT NULL,

              Exp_Date      DATE
            );



INSERT INTO Certification_Details VALUES (1,1,11,'2020-08-01');
INSERT INTO Certification_Details VALUES (2,1,1,'2021-07-01');
INSERT INTO Certification_Details VALUES (3,1,6,'2020-02-01');
INSERT INTO Certification_Details VALUES (4,1,7,null);
INSERT INTO Certification_Details VALUES(5,2,8,'2020-09-01');
INSERT INTO Certification_Details VALUES(6,2,1,'2021-07-01');
INSERT INTO Certification_Details VALUES(7,2,9,'2021-10-01');

INSERT INTO Certification_Details VALUES(8,3,10,'2019-09-01');
INSERT INTO Certification_Details VALUES(9,3,1,'2020-07-01');
INSERT INTO Certification_Details VALUES(10,3,9,'2019-10-01');
INSERT INTO Certification_Details VALUES(11,3,3,'2020-08-01');
