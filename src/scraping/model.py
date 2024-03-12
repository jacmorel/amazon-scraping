from enum import Enum


class Address:
    def __init__(self, street, city_state_postal, country):
        self.street = street
        self.city_state_postal = city_state_postal
        self.country = country


class Transaction:
    def __init__(self, date, amount, cc_last_4):
        self.date = date
        self.amount = amount
        self.cc_last_4 = cc_last_4

    def __repr__(self):
        return f"Transaction(date={self.date!r}, amount={self.amount!r}, cc_last_4={self.cc_last_4!r})"


class OrderStatus(Enum):
    PROCESSING = "PROCESSING"
    SHIPPED = "SHIPPED"
    DELIVERED = "DELIVERED"
    CANCELLED = "CANCELLED"


class Order:
    def __init__(self, order_number, ordered_date, details_link, invoice_link, status=OrderStatus.PROCESSING):
        self.number = order_number
        self.ordered_date = ordered_date
        self.status = status
        self.details_link = details_link
        self.invoice_link = invoice_link
        self.recipient = None
        self.shipping_address = None
        self.payment_credit_card = None
        self.items_subtotal_amount = None
        self.shipping_amount = None
        self.total_before_tax_amount = None
        self.tax_amount = None
        self.grand_total_amount = None
        self.gift_card_amount = None
        self.items_refund_amount = None
        self.tax_refund_amount = None
        self.total_refund_amount = None
        self.transactions = None
        self.coupon_savings = None
        self.subscription_savings = None
        self.shipping_savings = None
        self.rewards_amount = None
        self.courtesy_credit_amount = None

    def __repr__(self):
        return f"Order(number={self.number!r}, details={self.details_link!r}, invoice={self.invoice_link!r})"
