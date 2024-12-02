from django.db import models
from django.utils import timezone


class Member(models.Model):
    _Gen_type = [('Male', 'Male'), ('Female', 'Female')]
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=50)
    Gender = models.CharField(max_length=50, choices=_Gen_type)
    bio = models.TextField(blank=True)
    birth_date = models.DateField()
    # personal_image -> planned
    # wallpaper_image -> planned

    def __str__(self):
        return f'{self.name}'

    @property
    def Age(self):
        today = timezone.localdate()  # Get the current date in the local timezone
        birth_date = self.birth_date  # Assume `birth_date` is a `date` object
        age = today.year - birth_date.year

        # Adjust if the birthday hasn't occurred yet this year
        if (today.month, today.day) < (birth_date.month, birth_date.day):
            age -= 1

        return age
