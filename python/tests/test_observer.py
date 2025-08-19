from patterns.observer.order_subject import Order
from patterns.observer.observers import EmailObserver, LogObserver

def test_notify():
    o = Order()
    mail = EmailObserver()
    log = LogObserver()
    o.attach(mail)
    o.attach(log)

    o.status = 'paid'
    o.status = 'shipped'

    assert mail.messages == ['paid','shipped']
    assert log.events == ['paid','shipped']
