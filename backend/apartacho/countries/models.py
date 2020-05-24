"""Country model."""

# Django
from django.db import models

# Utilities
from apartacho.utils.models import ApartachoModel


class Country(ApartachoModel):
    """Country model.

    A country is the table that holds the relationship with
    a user and an address.
    """

    name = models.CharField(
        verbose_name='country name',
        max_length=50
    )

    def __str__(self):
        """Return country name."""
        return self.name