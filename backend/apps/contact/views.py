from django.shortcuts import render
from .models import Contact
from django.core.mail import send_mail
from .forms import ContactForm

def contact(request):
    form_submitted = False
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            form_submitted = True
            fname = form.validated_data['fname']
            lname = form.validated_data['lname']
            email = form.validated_data['email']
            message = form.validated_data['message']

            subject = 'New Contact Form Submission'
            message_body = f'Name: {fname} {lname}\nEmail: {email}\nMessage: {message}'
            from_email = None
            recipient_list = ['bmitchum.dev@gmail.com']

            send_mail(subject, message_body, from_email, recipient_list, fail_silently=False)
        else:
            if 'email' in form.errors:
                form.errors['email'] = 'Please enter a valid email address.'
            if 'message' in form.errors:
                form.errors['message'] = 'Please enter a message.'
            if 'fname' in form.errors:
                form.errors['fname'] = 'Please enter your first name.'
            if 'lname' in form.errors:
                form.errors['lname'] = 'Please enter your last name.'
    else: 
        form = ContactForm()
    return render(request, 'home.html', {'form': form, 'form_submitted': form_submitted})