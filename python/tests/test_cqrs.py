from patterns.cqrs.event_bus import EventBus
from patterns.cqrs.read_model import ReadModel
from patterns.cqrs.write_model import WriteModel
from patterns.cqrs.commands import Commands

def test_cqrs_flow():
    bus = EventBus()
    read = ReadModel()
    bus.subscribe(read.project)

    write = WriteModel(bus)
    cmd = Commands(write)

    cmd.create_user("u1", "Lucca", "lucca@example.com")
    cmd.update_user_name("u1", "Lucca Kolenez")

    user = read.get_user("u1")
    assert user["name"] == "Lucca Kolenez"
    assert len(read.all()) == 1
