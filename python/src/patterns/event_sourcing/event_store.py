from typing import Dict, List
from .events import AccountEvent

class EventStore:
    def __init__(self) -> None:
      self._store: Dict[str, List[AccountEvent]] = {}
    def append(self, stream_id: str, event: AccountEvent) -> None:
      self._store.setdefault(stream_id, []).append(event)
    def load(self, stream_id: str) -> list[AccountEvent]:
      return list(self._store.get(stream_id, []))
