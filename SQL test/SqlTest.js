// 1)select w.name from AD_Window w where w.AD_Window_ID=100

// 2)update AD_Window w set w.name = concat('--',w.name) where w.AD_Window_ID=100

// 3)select * from AD_tab t where t.AD_Window_ID=100

// 4)select t.name, f.name from AD_tab t join AD_field f where (f.AD_Field_ID = t.id and t.AD_Window_ID=3) order by t.name, f.name

// 5)select w.name, count(t.AD_Tab_ID) as total_tab  from AD_tab t join AD_window w where t.AD_Window_ID = w.id group by w.name

// 6)select w.name, count(t.AD_Tab_ID) as total_tab  from AD_tab t join AD_window w where t.AD_Window_ID = w.id group by w.name order by total_tab desc

// 7)select w.name, count(t.AD_Tab_ID) as total_tab  from AD_tab t join AD_window w where t.AD_Window_ID = w.id group by w.name having count(t.AD_Tab_ID) > 5
