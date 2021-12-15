CREATE TABLE "exam" (
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



CREATE TABLE "professor" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "professor_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subject" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"semester" varchar(8) NOT NULL,
	CONSTRAINT "subject_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "professor-subject" (
	"id" serial NOT NULL,
	"subject_id" integer NOT NULL,
	"professor_id" integer NOT NULL,
	CONSTRAINT "professor-subject_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "exam" ADD CONSTRAINT "exam_fk0" FOREIGN KEY ("subject_id") REFERENCES "subject"("id");
ALTER TABLE "exam" ADD CONSTRAINT "exam_fk1" FOREIGN KEY ("professor_id") REFERENCES "professor"("id");



ALTER TABLE "professor-subject" ADD CONSTRAINT "professor-subject_fk0" FOREIGN KEY ("subject_id") REFERENCES "subject"("id");
ALTER TABLE "professor-subject" ADD CONSTRAINT "professor-subject_fk1" FOREIGN KEY ("professor_id") REFERENCES "professor"("id");




