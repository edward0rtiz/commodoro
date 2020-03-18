from django.contrib import admin
from django.urls import path
from places.views import *
from products.views import *
from users.views import *
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
#----------auth------------------
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', obtain_auth_token),
    url(r'^api/v1/users/$', UsersListView.as_view()),
    url(r'^api/v1/users/(?P<pk>\d+)/$', UsersView.as_view()),
    url(r'^api/v1/farms/$', FarmsListView.as_view()),
    url(r'^api/v1/farms/(?P<pk>\d+)/$', FarmsView.as_view()),
    url(r'^api/v1/pictures/$', PicturesListView.as_view()),
    url(r'^api/v1/pictures/(?P<pk>\d+)/$', PicturesView.as_view()),
    url(r'^api/v1/products/$', ProductsListView.as_view()),
    url(r'^api/v1/products/(?P<pk>\d+)/$', ProductsView.as_view()),
    url(r'^api/v1/certificates/$', CertificatesListView.as_view()),
    url(r'^api/v1/certificates/(?P<pk>\d+)/$', CertificatesView.as_view()),
]