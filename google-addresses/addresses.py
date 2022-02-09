# Import libraries
import pandas as pd
import selenium
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import ElementNotInteractableException
from webdriver_manager.chrome import ChromeDriverManager
import requests
from bs4 import BeautifulSoup
import time
pd.set_option('display.max_colwidth', None)

# Set Selenium options
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--disable-extensions")

# Function 'get_addresses' that takes non-formatted addresses, does a Google search, and return the address from the search result.


def get_addresses(address):
    driver = webdriver.Chrome(
        ChromeDriverManager().install(),
        options=chrome_options
    )
    driver.get(
        "https://www.google.com/search?q=test")
    try:
        search_box = driver.find_element(
            By.XPATH, '//*[@id="tsf"]/div[1]/div[1]/div[2]/div[1]/div/div[2]/input')
        search_box.clear()
        search_box.send_keys(address)
        search_box.send_keys(Keys.RETURN)
        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')
        address_from_google = soup.find('span', {'class': 'LrzXr'})
        time.sleep(3)
        return address_from_google
    except (AttributeError):
        time.sleep(6)
        return 'no_result'
