from .read_model import ReadModel

class Queries:
    def __init__(self, read: ReadModel) -> None:
        self.read = read
    def get_user(self, id: str):
        return self.read.get_user(id)
    def all_users(self):
        return self.read.all()
