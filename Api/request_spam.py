import requests
url = 'http://localhost:5000/check-email'
data = 'Subject: naturally irresistible your corporate...#	'
response = requests.post(url, data=data)
print(response.text)
