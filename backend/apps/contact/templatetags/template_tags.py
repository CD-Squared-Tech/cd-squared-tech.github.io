import os
from django import template

register = template.Library()

@register.filter
def env(key):
    return os.environ.get(key, None)