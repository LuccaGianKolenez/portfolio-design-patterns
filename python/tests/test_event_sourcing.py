from patterns.event_sourcing.event_store import EventStore
from patterns.event_sourcing.account import Account

def test_event_sourcing_balance():
    store = EventStore()
    a1 = Account("acc1", store).load()
    a1.deposit(100)
    a1.withdraw(40)
    assert a1.balance == 60

    # Rehydrate
    a2 = Account("acc1", store).load()
    assert a2.balance == 60
