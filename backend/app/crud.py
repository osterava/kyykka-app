from sqlalchemy.orm import Session
from . import models, schemas

def get_groups(db: Session):
    return db.query(models.Group).all()

def create_group(db: Session, group: schemas.GroupCreate):
    db_group = models.Group(name=group.name)
    db.add(db_group)
    db.commit()
    db.refresh(db_group)
    return db_group

def get_teams(db: Session):
    return db.query(models.Team).all()

def create_team(db: Session, team: schemas.TeamCreate):
    db_team = models.Team(**team.dict())
    db.add(db_team)
    db.commit()
    db.refresh(db_team)
    return db_team

def update_team(db: Session, team_id: int, team: schemas.TeamCreate):
    db_team = db.query(models.Team).get(team_id)
    for key, value in team.dict().items():
        setattr(db_team, key, value)
    db.commit()
    return db_team
