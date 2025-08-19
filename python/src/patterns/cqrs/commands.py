from .write_model import WriteModel

class Commands:
    def __init__(self, write: WriteModel) -> None:
        self.write = write
    def create_user(self, id: str, name: str, email: str) -> None:
        self.write.create_user(id, name, email)
    def update_user_name(self, id: str, name: str) -> None:
        self.write.update_user_name(id, name)
