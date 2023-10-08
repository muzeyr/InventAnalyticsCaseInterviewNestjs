INSERT INTO invent_analytics_db.users (id,created_at,updated_at,deleted_at,name) VALUES
	 ('4b2e033f-05cd-4ccc-a6ff-b146c9c134f7','2023-10-08 21:09:03.475000','2023-10-08 21:09:03.475000',NULL,'J.K. Rowlin'),
	 ('4cbbbc05-f19e-4e93-b01f-b63f30b458d4','2023-10-08 21:08:52.151000','2023-10-08 21:08:52.151000',NULL,'Üzeyr ÖZCAN'),
	 ('99c194f9-ab06-4f68-8b27-723330225741','2023-10-08 21:09:47.356000','2023-10-08 21:09:47.356000',NULL,'Test UU'),
	 ('bc1aa1f8-731b-4587-8b6e-c36e36131a22','2023-10-08 21:23:26.729000','2023-10-08 21:23:26.729000',NULL,'Üzeyr ÖZCAN');


INSERT INTO invent_analytics_db.books (id,created_at,updated_at,deleted_at,name) VALUES
	 ('057e1f3d-67d7-4b92-a9b2-0adbfc00cb1d','2023-10-08 21:10:38.962000','2023-10-08 21:10:38.962000',NULL,'Harry Potter -4'),
	 ('cc9349de-45a6-4b29-94ff-7aadd88f4a43','2023-10-08 21:10:08.076000','2023-10-08 21:10:08.076000',NULL,'Harry Potter and the Sorcerer Stone');



INSERT INTO invent_analytics_db.borrows (id,created_at,updated_at,deleted_at,score,borrowedById,bookId,returnDate,createdAt,updatedAt) VALUES
	 ('2934af65-6834-4721-abb8-329c37078b7e','2023-10-08 21:11:07.044000','2023-10-08 21:13:14.027000',NULL,1,'99c194f9-ab06-4f68-8b27-723330225741','057e1f3d-67d7-4b92-a9b2-0adbfc00cb1d','2023-10-08 21:13:14','2023-10-08 18:11:07.050724','2023-10-08 18:13:14.034209');
INSERT INTO invent_analytics_db.users (id,created_at,updated_at,deleted_at,name) VALUES
	 ('4b2e033f-05cd-4ccc-a6ff-b146c9c134f7','2023-10-08 21:09:03.475000','2023-10-08 21:09:03.475000',NULL,'J.K. Rowlin'),
	 ('4cbbbc05-f19e-4e93-b01f-b63f30b458d4','2023-10-08 21:08:52.151000','2023-10-08 21:08:52.151000',NULL,'Üzeyr ÖZCAN'),
	 ('99c194f9-ab06-4f68-8b27-723330225741','2023-10-08 21:09:47.356000','2023-10-08 21:09:47.356000',NULL,'Test UU'),
	 ('bc1aa1f8-731b-4587-8b6e-c36e36131a22','2023-10-08 21:23:26.729000','2023-10-08 21:23:26.729000',NULL,'Üzeyr ÖZCAN');


INSERT INTO invent_analytics_db.books (id,created_at,updated_at,deleted_at,name) VALUES
	 ('057e1f3d-67d7-4b92-a9b2-0adbfc00cb1d','2023-10-08 21:10:38.962000','2023-10-08 21:10:38.962000',NULL,'Harry Potter -4'),
	 ('cc9349de-45a6-4b29-94ff-7aadd88f4a43','2023-10-08 21:10:08.076000','2023-10-08 21:10:08.076000',NULL,'Harry Potter and the Sorcerer Stone');



INSERT INTO invent_analytics_db.borrows (id,created_at,updated_at,deleted_at,score,borrowedById,bookId,returnDate,createdAt,updatedAt) VALUES
	 ('2934af65-6834-4721-abb8-329c37078b7e','2023-10-08 21:11:07.044000','2023-10-08 21:13:14.027000',NULL,1,'99c194f9-ab06-4f68-8b27-723330225741','057e1f3d-67d7-4b92-a9b2-0adbfc00cb1d','2023-10-08 21:13:14','2023-10-08 18:11:07.050724','2023-10-08 18:13:14.034209');
