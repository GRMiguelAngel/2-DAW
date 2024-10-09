from .models import Task
from django.shortcuts import render

# Create your views here.

def home(request):
    num_tasks = Task.objects.count()
    tasks = Task.objects.all()
    return render(
        request,
        'tasklist/home.html',
        {'num_tasks': num_tasks, 'tasks': tasks},
    )


def task_detail(request, task_slug: str):
    task = Task.objects.get(slug=task_slug)
    return render(request, 'tasklist/tasks/detail.html', dict(task=task))