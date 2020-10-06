CREATE TABLE Members

             (Member_ID INT NOT NULL,

             First_Name          VARCHAR(25)    NOT NULL,

              Last_Name        VARCHAR(25)    NOT NULL,

              Title     VARCHAR(30)    NOT NULL,

              Gender   VARCHAR(10)            NOT NULL,

              MemberCity        VARCHAR(20)    NOT NULL,

              MemberState       CHAR(2)         NOT NULL,

              MemberZipCode     VARCHAR(10)    NOT NULL,

              MemberPhone VARCHAR(10)            NOT NULL,

              Radio  VARCHAR(10)    NOT NULL,

              Station INT(25) NOT NULL,

              IsActive BOOLEAN NOT NULL,


CONSTRAINT MEMBERS_PK PRIMARY KEY (Member_ID));







CREATE TABLE Certifications

             (Certification_ID        INT   NOT NULL,

	      Certificate_Name    VARCHAR(30)    NOT NULL,  

          Exp_period INT NOT NULL,            

CONSTRAINT CERTIFICATIONS_PK PRIMARY KEY (Certification_ID));



CREATE TABLE Certification_Details

             (Member_Cert_ID INT NOT NULL,

              Member_ID          INT    NOT NULL,

              Certification_ID            INT    NOT NULL,

              Exp_Date      DATE        NOT NULL, 

CONSTRAINT CERTIFICATION_DETAILS_PK PRIMARY KEY (Member_Cert_ID),

CONSTRAINT CERTIFICATION_DETAILS_FK1 FOREIGN KEY (Member_ID) REFERENCES Members(Member_ID),

CONSTRAINT CERTIFICATION_DETAILS_FK2 FOREIGN KEY (Certification_ID) REFERENCES Certifications(Certification_ID));