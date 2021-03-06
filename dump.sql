CREATE TABLE "exams" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"subject_id" integer NOT NULL,
	"professor_id" integer NOT NULL,
	"link" varchar(255) NOT NULL,
	CONSTRAINT "exam_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "professors" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "professor_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"semester" varchar(8) NOT NULL,
	CONSTRAINT "subject_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "professor_subject" (
	"id" serial NOT NULL,
	"subject_id" integer NOT NULL,
	"professor_id" integer NOT NULL,
	CONSTRAINT "professor-subject_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("professor_id") REFERENCES "professors"("id");



ALTER TABLE "professor_subject" ADD CONSTRAINT "professor_subject_fk0" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
ALTER TABLE "professor_subject" ADD CONSTRAINT "professor_subject_fk1" FOREIGN KEY ("professor_id") REFERENCES "professors"("id");


INSERT INTO "subjects" (name,semester) VALUES ('Cálculo 1','1º');
INSERT INTO "subjects" (name,semester) VALUES ('Cálculo 2','2º');
INSERT INTO "subjects" (name,semester) VALUES ('Cálculo 3','3º');
INSERT INTO "subjects" (name,semester) VALUES ('Cálculo 4','4º');
INSERT INTO "subjects" (name,semester) VALUES ('Física 1','1º');
INSERT INTO "subjects" (name,semester) VALUES ('Física 2','2º');



INSERT INTO "professors" (name) VALUES ('Roberto');
INSERT INTO "professors" (name) VALUES ('José');
INSERT INTO "professors" (name) VALUES ('Alberto');
INSERT INTO "professors" (name) VALUES ('Carlos');
INSERT INTO "professors" (name) VALUES ('Carla');
INSERT INTO "professors" (name) VALUES ('Roberta');
INSERT INTO "professors" (name) VALUES ('Andréia');
INSERT INTO "professors" (name) VALUES ('Maria');


INSERT INTO "professor_subject" (subject_id,professor_id) VALUES (1,1);

INSERT INTO "professor_subject" (subject_id,professor_id) VALUES (1,2);
INSERT INTO "professor_subject" (subject_id,professor_id) VALUES (1,3);
INSERT INTO "professor_subject" (subject_id,professor_id) VALUES (2,4);
INSERT INTO "professor_subject" (subject_id,professor_id) VALUES (2,5);
INSERT INTO "professor_subject" (subject_id,professor_id) VALUES (2,6);
INSERT INTO "professor_subject" (subject_id,professor_id) VALUES (6,8);
INSERT INTO "professor_subject" (subject_id,professor_id) VALUES (3,2);
INSERT INTO "professor_subject" (subject_id,professor_id) VALUES (4,5);
INSERT INTO "professor_subject" (subject_id,professor_id) VALUES (5,7);

