from datetime import date
from django.test import TestCase
from api.models import Member
from django.utils import timezone


class MemberTest(TestCase):

    def setUp(self):
        """Create a test instance of the Member model."""
        self.Member = Member.objects.create(
                name="John Doe",
                email="john@example.com",
                phone_number="123456789",
                Gender="Male",
                birth_date=date(1990, 5, 15)
        )

    def test_Member_creation(self):
        """Test that a Member object is created correctly."""
        self.assertEqual(self.Member.name, "John Doe")
        self.assertEqual(self.Member.birth_date.strftime(
            "%Y-%m-%d"), "1990-05-15")

    def test_Member_age(self):
        """Test the Age property of the Member model."""
        today = timezone.localdate()
        expected_age = today.year - self.Member.birth_date.year
        if (today.month, today.day) < (self.Member.birth_date.month, self.Member.birth_date.day):
            expected_age -= 1
        self.assertEqual(self.Member.Age, expected_age)
