# -*- coding: utf-8 -*-
"""
Created on Sun May 14 12:51:07 2017

@author: Administrator
"""

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver import ActionChains
from selenium.webdriver.chrome.options import Options
import time

path_to_extension = r'F:\code\crackCaptcha\fuckCapcha'
chrome_options = Options()
chrome_options.add_argument('load-extension=' + path_to_extension)


driver = webdriver.Chrome(chrome_options=chrome_options)

# driver = webdriver.Chrome()
driver.get("http://game.captcha.qq.com/hslj/html/hslj/game_vcode.html?session_id=3068445077649013958&uin=714428042")
# assert "Python" in driver.title
# elem = driver.find_element_by_name("q")
# elem.clear()
# elem.send_keys("pycon")
# elem.send_keys(Keys.RETURN)
# assert "No results found." not in driver.page_source
# driver.close()
iFrame = driver.find_element_by_tag_name("iframe");
print(iFrame);
# driver.switchTo().frame(iFrame);
driver.switch_to_frame(iFrame)
# for handle in driver.window_handles:


while True:  
    e1 = driver.find_element_by_id("totalBlock")
    actions = ActionChains(driver)
    actions.move_to_element(e1)
    actions.double_click()
    actions.perform()

    element = driver.find_element_by_id("slide_bar_head")
    try:
        val = element.get_attribute("data")
        print(val)
        val = int(float(val))
        print('Int:')
        print(val)
        
        if val :
            actions = ActionChains(driver)
            actions.move_to_element(element)
            actions.drag_and_drop_by_offset(element, val-18, 0)
            actions.click_and_hold(element)
            actions.perform()
    except:
        pass
    
    time.sleep(1)
