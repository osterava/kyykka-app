from pydantic import BaseModel
from typing import Optional, List

class TeamBase(BaseModel):
    name: str
    coach: Optional[str] = None
    group_id: Optional[int] = None

class TeamCreate(TeamBase):
    pass

class TeamOut(TeamBase):
    id: int

    class Config:
        from_attributes = True


class GroupBase(BaseModel):
    name: str

class GroupCreate(GroupBase):
    pass

class GroupOut(GroupBase):
    id: int
    teams: List[TeamOut] = []

    class Config:
        from_attributes = True
