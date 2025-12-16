from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine
from app import models, schemas, crud

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Lohkojako API")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/groups", response_model=list[schemas.GroupOut])
def read_groups(db: Session = Depends(get_db)):
    return crud.get_groups(db)

@app.post("/groups", response_model=schemas.GroupOut)
def create_group(group: schemas.GroupCreate, db: Session = Depends(get_db)):
    return crud.create_group(db, group)

@app.get("/teams", response_model=list[schemas.TeamOut])
def read_teams(db: Session = Depends(get_db)):
    return crud.get_teams(db)

@app.post("/teams", response_model=schemas.TeamOut)
def create_team(team: schemas.TeamCreate, db: Session = Depends(get_db)):
    return crud.create_team(db, team)

@app.put("/teams/{team_id}", response_model=schemas.TeamOut)
def update_team(team_id: int, team: schemas.TeamCreate, db: Session = Depends(get_db)):
    return crud.update_team(db, team_id, team)
