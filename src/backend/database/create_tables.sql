CREATE TABLE card (
    id SMALLSERIAL PRIMARY KEY,
    image_data VARCHAR,
    hash VARCHAR,
    open BOOLEAN DEFAULT false,
    date DATE
);
