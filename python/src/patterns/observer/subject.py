from typing import Generic, TypeVar, Protocol

T = TypeVar("T")

class Observer(Protocol[T]):
    def update(self, value: T) -> None: ...

class Subject(Generic[T]):
    def __init__(self) -> None:
        self._observers: list[Observer[T]] = []
    def attach(self, o: Observer[T]) -> None:
        self._observers.append(o)
    def detach(self, o: Observer[T]) -> None:
        self._observers.remove(o)
    def notify(self, value: T) -> None:
        for obs in list(self._observers):
            obs.update(value)
