```
python3 -m venv venv
```
```
source venv/bin/activate
```
```
pip install -r requirements.txt
```
```
python3 manage.py makemigrations RESTApi
```
```
python3 manage.py migrate
```
```
DEBUG=True python3 manage.py runserver
```
```
python3 manage.py createsuperuser
```

Bezpośrednie zależności są w `requirements.in`. Po ich zmianie należy odświeżyć `requirements.txt`:

```
uv pip compile requirements.in --python-version 3.13 --no-header --no-annotate -o requirements.txt
```
