import requests
from bs4 import BeautifulSoup

response = requests.get("https://www.toronto.ca/city-government/data-research-maps/research-reports/housing/housing-and-homelessness-research-and-reports/shelter-census/")
soup = BeautifulSoup(response.text, "html.parser")
links = soup.find_all("a")
