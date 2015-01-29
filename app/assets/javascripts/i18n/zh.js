var I18n = I18n || {};
I18n.translations = {"zh":{"devise":{"confirmations":{"confirmed":"\u60a8\u7684\u5e10\u53f7\u5df2\u7ecf\u786e\u8ba4\uff0c\u60a8\u73b0\u5728\u5df2\u767b\u5f55.","link":"\u6ca1\u6709\u6536\u5230\u786e\u8ba4\u4fe1\u606f\uff1f","send_instructions":"\u51e0\u5206\u949f\u540e\uff0c\u60a8\u5c06\u6536\u5230\u786e\u8ba4\u5e10\u53f7\u7684\u7535\u5b50\u90ae\u4ef6.","send_paranoid_instructions":"\u5982\u679c\u60a8\u7684\u90ae\u7bb1\u5b58\u5728\u4e8e\u6211\u4eec\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u60a8\u5c06\u6536\u5230\u4e00\u5c01\u786e\u8ba4\u8d26\u53f7\u7684\u90ae\u4ef6."},"destroy":{"confirm":"\u60a8\u786e\u5b9a\u5417\uff1f","headline":"\u5220\u9664\u5e10\u6237","link":"\u73b0\u5728\u5220\u9664"},"edit":{"form":{"labels":{"current_password":"\u5f53\u524d\u5bc6\u7801<i>(\u6211\u4eec\u9700\u8981\u5b83\u6765\u786e\u8ba4\u60a8\u7684\u66f4\u6539)</i>","email":"\u7535\u5b50\u90ae\u4ef6","password":"\u5bc6\u7801<i>(\u5982\u679c\u60a8\u4e0d\u60f3\u6539\u53d8\u5c31\u7559\u4e0b\u7a7a\u767d)</i>","password_confirmation":"\u91cd\u590d\u5bc6\u7801"},"submit":"\u4fdd\u7559\u66f4\u6539"},"headline":"\u7f16\u8f91\u5e10\u6237"},"failure":{"already_authenticated":"\u60a8\u5df2\u7ecf\u767b\u5f55.","inactive":"\u60a8\u8fd8\u6ca1\u6709\u6fc0\u6d3b\u5e10\u6237.","invalid":"\u90ae\u7bb1\u6216\u5bc6\u7801\u9519\u8bef","invalid_token":"\u8ba4\u8bc1\u7801\u65e0\u6548.","locked":"\u60a8\u7684\u5e10\u53f7\u5df2\u88ab\u9501\u5b9a.","timeout":"\u60a8\u5df2\u767b\u5f55\u8d85\u65f6\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55.","unauthenticated":"\u7ee7\u7eed\u64cd\u4f5c\u524d\u8bf7\u6ce8\u518c\u6216\u8005\u767b\u5f55.","unconfirmed":"\u7ee7\u7eed\u64cd\u4f5c\u524d\u8bf7\u5148\u786e\u8ba4\u60a8\u7684\u5e10\u53f7."},"mailer":{"confirmation_instructions":{"landing_page":"\u8bf7\u5728\u6211\u4eec\u53d1\u7ed9\u60a8\u7684\u90ae\u4ef6\u91cc\u70b9\u51fb\u5176\u4e2d\u7684\u94fe\u63a5\u3002\u5982\u679c\u60a8\u6ca1\u770b\u5230\u90ae\u4ef6\u8bf7\u5148\u68c0\u67e5\u5783\u573e\u90ae\u4ef6\u5939\uff0c\u5982\u679c\u4ecd\u7136\u6ca1\u6709\u7684\u8bdd\uff0c\u8bf7\u8fd4\u56de\u6ce8\u518c\u9875\u9762\u91cd\u8bd5\u4e00\u6b21\u3002","subject":"\u8fd8\u6709\u4e00\u6b65\u6fc0\u6d3b\u60a8\u7684\u5e10\u6237"},"reset_password_instructions":{"subject":"\u91cd\u7f6e\u5bc6\u7801\u4fe1\u606f"},"unlock_instructions":{"subject":"\u89e3\u9501\u4fe1\u606f"}},"mandatory":"*\u5fc5\u987b\u7684","omniauth_callbacks":{"failure":"\u56e0\u4e3a%{reason}\uff0c\u6240\u4ee5\u60a8\u65e0\u6cd5\u4ece%{kind}\u83b7\u5f97\u6388\u6743.","success":"\u6210\u529f\u5730\u4ece%{kind}\u83b7\u5f97\u6388\u6743."},"password_recovery":{"form":{"labels":{"email":"\u7535\u5b50\u90ae\u4ef6"},"submit":"\u91cd\u7f6e\u5bc6\u7801"},"headline":"\u5fd8\u8bb0\u5bc6\u7801\uff1f"},"password_reset":{"email":{"comment":"\u5982\u679c\u60a8\u6ca1\u6709\u7533\u8bf7\u5bc6\u7801\u91cd\u7f6e\uff0c\u8bf7\u5ffd\u7565\u6b64\u90ae\u4ef6<br/>\u9664\u975e\u70b9\u51fb\u4e0a\u8ff0\u94fe\u63a5\u5e76\u8bbe\u7f6e\u65b0\u5bc6\u7801\uff0c\u5426\u5219\u60a8\u7684\u5bc6\u7801\u4e0d\u4f1a\u66f4\u6539","headline":"\u6b22\u8fce%{email}","link":"\u66f4\u6362\u6211\u7684\u5bc6\u7801","text":"\u5982\u679c\u60a8\u70b9\u51fb\u4e86\u4ee5\u4e0b\u94fe\u63a5\uff0c\u8981\u6c42\u66f4\u6539\u5bc6\u7801\uff0d\u5426\u5219\u8bf7\u5ffd\u7565"},"form":{"labels":{"password":"\u65b0\u5bc6\u7801","password_confirmation":"\u91cd\u590d\u5bc6\u7801"},"submit":"\u91cd\u7f6e\u5bc6\u7801"},"headline":"\u91cd\u7f6e\u5bc6\u7801"},"passwords":{"link":"\u5fd8\u8bb0\u5bc6\u7801\uff1f","send_instructions":"\u51e0\u5206\u949f\u540e\uff0c\u60a8\u5c06\u6536\u5230\u91cd\u7f6e\u5bc6\u7801\u7684\u7535\u5b50\u90ae\u4ef6.","send_paranoid_instructions":"\u5982\u679c\u60a8\u7684\u90ae\u7bb1\u5b58\u5728\u4e8e\u6211\u4eec\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u60a8\u5c06\u6536\u5230\u4e00\u5c01\u627e\u56de\u5bc6\u7801\u7684\u90ae\u4ef6.","updated":"\u60a8\u7684\u5bc6\u7801\u5df2\u4fee\u6539\u6210\u529f\uff0c\u60a8\u73b0\u5728\u5df2\u767b\u5f55.","updated_not_active":"\u60a8\u7684\u5bc6\u7801\u5df2\u4fee\u6539\u6210\u529f."},"registrations":{"destroyed":"\u518d\u89c1\uff01\u60a8\u7684\u5e10\u6237\u5df2\u6210\u529f\u6ce8\u9500\u3002\u6211\u4eec\u5e0c\u671b\u5f88\u5feb\u53ef\u4ee5\u518d\u89c1\u5230\u60a8.","inactive_signed_up":"\u867d\u7136\u60a8\u5df2\u7ecf\u6ce8\u518c\u6210\u529f,\u4f46\u56e0\u4e3a%{reason},\u6240\u4ee5\u60a8\u4f9d\u7136\u65e0\u6cd5\u767b\u5f55.","link":"\u6ce8\u518c","reasons":{"inactive":"\u672a\u6fc0\u6d3b","locked":"\u5df2\u9501\u5b9a","unconfirmed":"\u672a\u786e\u8ba4"},"signed_up":"\u6b22\u8fce\u60a8\uff01\u60a8\u5df2\u6ce8\u518c\u6210\u529f.","updated":"\u5e10\u53f7\u8d44\u6599\u66f4\u65b0\u6210\u529f."},"sessions":{"inactive":"\u60a8\u7684\u5e10\u6237\u8fd8\u6ca1\u6709\u6fc0\u6d3b","invalid":"\u65e0\u6548\u7684\u90ae\u7bb1\u6216\u5bc6\u7801","invalid_token":"\u65e0\u6548\u7684\u8eab\u4efd\u8bc1\u660e","link":"\u767b\u5f55","locked":"\u60a8\u7684\u5e10\u6237\u5df2\u88ab\u9501\u5b9a","new":{"no_osm_account":"\u6c92\u6709 OpenStreetMap \u7684\u5e33\u865f\u55ce\uff1f"},"signed_in":"\u767b\u5f55\u6210\u529f.","signed_out":"\u9000\u51fa\u6210\u529f.","timeout":"\u60a8\u7684\u6709\u6548\u671f\u5df2\u8fc7\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\u5e76\u7ee7\u7eed\u64cd\u4f5c","unauthenticated":"\u5728\u7ee7\u7eed\u64cd\u4f5c\u524d\u60a8\u5fc5\u987b\u767b\u5f55\u6216\u6ce8\u518c","unconfirmed":"\u5728\u7ee7\u7eed\u4e0b\u4e00\u6b65\u4e4b\u524d\u60a8\u9700\u8981\u786e\u8ba4\u60a8\u7684\u5e10\u6237"},"sign_in":{"form":{"labels":{"email":"\u7535\u5b50\u90ae\u4ef6","password":"\u5bc6\u7801","remember_me":"\u4fdd\u7559\u767b\u5f55\u72b6\u6001\uff1f"},"submit":"\u767b\u5f55"},"headline":"\u767b\u5f55"},"sign_out":{"headline":"\u6ce8\u6d88"},"sign_up":{"email":{"confirm_my_account":"\u786e\u8ba4\u6211\u7684\u5e10\u6237","please_confirm":"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u94fe\u63a5\u786e\u8ba4\u60a8\u7684\u5e10\u6237","welcome":"\u6b22\u8fce%{email}!"},"form":{"labels":{"email":"\u7535\u5b50\u90ae\u4ef6","password":"\u5bc6\u7801","password_confirmation":"\u91cd\u590d\u5bc6\u7801","wants_newsletter":"\u662f\uff0c\u4fdd\u6301wheelmap\u5373\u65f6\u66f4\u65b0\uff0c\uff0d\u4f46\u662f\u6bcf\u6708\u4e0d\u8d85\u8fc7\u4e00\u6b21"},"submit":"\u6ce8\u518c"},"headline":"\u6ce8\u518c"},"unlocks":{"link":"\u6ca1\u6709\u6536\u5230\u89e3\u9501\u8bf4\u660e\uff1f","send_instructions":"\u51e0\u5206\u949f\u540e\uff0c\u60a8\u5c06\u6536\u5230\u4e00\u5c01\u89e3\u9501\u5e10\u53f7\u7684\u90ae\u4ef6.","send_paranoid_instructions":"\u5982\u679c\u60a8\u7684\u90ae\u7bb1\u5b58\u5728\u4e8e\u6211\u4eec\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u60a8\u5c06\u6536\u5230\u4e00\u5c01\u89e3\u9501\u8d26\u53f7\u7684\u90ae\u4ef6.","unlocked":"\u60a8\u7684\u5e10\u53f7\u5df2\u6210\u529f\u89e3\u9501\uff0c\u60a8\u73b0\u5728\u5df2\u767b\u5f55."}},"poi":{"category":{"accommodation":"\u4f4f\u5bbf","education":"\u6559\u80b2","food":"\u98df\u7269","government":"\u653f\u5e9c","health":"\u5065\u5eb7","leisure":"\u4f11\u95f2","misc":"\u5176\u5b83","money_post":"\u90ae\u653f\u94f6\u884c","public_transfer":"\u516c\u5171\u4ea4\u901a","shopping":"\u8d2d\u7269","sport":"\u4f53\u80b2","tourism":"\u65c5\u6e38","unknown":"\u672a\u77e5"},"name":{"accommodation":{"beach_resort":"\u6d77\u6ee8\u65c5\u9986","bed_and_breakfast":"\u5e8a\u4f4d\u548c\u65e9\u9910","camp_site":"\u9732\u8425\u7f51\u9875","caravan_site":"\u7bf7\u8f66\u573a\u6240","chalet":"\u519c\u820d","guest_house":"\u62db\u5f85\u6240","hostel":"\u9752\u5e74\u65c5\u793e","hotel":"\u5bbe\u9986","motel":"\u6c7d\u8f66\u65c5\u9986"},"education":{"college":"\u5b66\u9662","kindergarten":"\u5e7c\u513f\u56ed","library":"\u56fe\u4e66\u9986","museum":"\u535a\u7269\u9986","school":"\u5b66\u6821","university":"\u5927\u5b66"},"food":{"bar":"\u9152\u5427","biergarten":"\u5564\u9152\u82b1\u56ed","cafe":"\u5496\u5561\u5e97","drinking_water":"\u996e\u7528\u6c34","fast_food":"\u5feb\u9910","pub":"\u9152\u5427","restaurant":"\u9910\u9986"},"government":{"courthouse":"\u6cd5\u9662","embassy":"\u5927\u4f7f\u9986","police":"\u8b66\u5bdf","public_building":"\u516c\u5171\u5efa\u7b51","townhall":"\u5e02\u653f\u5385"},"health":{"doctors":"\u533b\u751f","hearing_aids":"\u52a9\u542c\u5668\u7ecf\u9500\u5546","hospital":"\u533b\u9662","medical_supply":"\u533b\u836f\u7528\u54c1","pharmacy":"\u836f\u5e97","social_facility":"\u516c\u7528\u8bbe\u65bd","veterinary":"\u517d\u533b"},"leisure":{"arena":"\u7ade\u6280\u573a","brothel":"\u5993\u9662","cinema":"\u5f71\u9662","community_center":"\u793e\u533a\u4e2d\u5fc3","gallery":"\u5c55\u5385","nightclub":"\u591c\u603b\u4f1a","playground":"\u6d3b\u52a8\u573a\u6240","sauna":"\u6851\u62ff","stripclub":"\u8131\u8863\u821e\u591c\u603b\u4f1a","theatre":"\u5267\u9662","zoo":"\u52a8\u7269\u56ed"},"misc":{"company":"\u516c\u53f8\uff08\u529e\u516c\u5ba4\uff09","lawyer":"\u5f8b\u5e08","place_of_worship":"\u6559\u5802","toilets":"\u5395\u6240"},"money_post":{"atm":"\u81ea\u52a8\u53d6\u6b3e\u673a","bank":"\u94f6\u884c","bureau_de_change":"\u5916\u5e01\u5151\u6362","post_box":"\u90ae\u7bb1","post_office":"\u90ae\u5c40"},"public_transfer":{"aerodrome":"\u673a\u573a","bicycle_parking":"\u5355\u8f66\u505c\u653e","bicycle_rental":"\u5355\u8f66\u51fa\u79df","boatyard":"\u7801\u5934","bus_station":"\u516c\u5171\u6c7d\u8f66\u7ad9","bus_stop":"\u516c\u5171\u6c7d\u8f66\u7ad9","cable_car":"\u7f06\u8f66","car_rental":"\u6c7d\u8f66\u51fa\u79df","car_sharing":"\u62fc\u8f66","chair_lift":"\u5347\u964d\u673a","ferry":"\u8f6e\u6e21","ferry_terminal":"\u8f6e\u6e21\u7801\u5934","fuel":"\u52a0\u6cb9\u7ad9","halt":"\u505c\u9760\u7ad9","light_rail":"\u8f7b\u8f68","parking":"\u505c\u8f66","parking_aisle":"\u505c\u8f66\u9053","platform":"\u7ad9\u53f0","station":"\u5730\u94c1","subway_entrance":"\u5730\u94c1\u5165\u53e3","terminal":"\u673a\u573a\u822a\u7ad9\u697c","tram_stop":"\u7535\u8f66\u7ad9"},"shopping":{"alcohol":"\u9152\u7c7b","bakery":"\u9762\u5305\u5e97","beverages":"\u996e\u6599","bicycle":"\u5355\u8f66\u5e97","books":"\u4e66\u7c4d","butcher":"\u8089\u5e97","car_repair":"\u6c7d\u8f66\u4fee\u7406","car_shop":"\u8f66\u884c","chemist":"\u836f\u5e97","clothes":"\u670d\u88c5","computer":"\u7535\u8111","convenience":"\u65b9\u4fbf","department_store":"\u767e\u8d27\u5546\u5e97","doityourself":"\u81ea\u5df1\u52a8\u624b","dry_cleaning":"\u5e72\u6d17","electronics":"\u7535\u5b50\u4ea7\u54c1","florist":"\u82b1\u5e97","furniture":"\u5bb6\u5177","garden_centre":"\u56ed\u827a\u4e2d\u5fc3","hairdresser":"\u7406\u53d1\u5e08","hardware":"\u786c\u4ef6","kiosk":"\u4e66\u62a5\u4ead","laundry":"\u6d17\u8863\u5e97","mall":"\u8d2d\u7269\u4e2d\u5fc3","optician":"\u9a8c\u5149\u5e08","photo":"\u7167\u7247","second_hand":"\u4e8c\u624b","shoes":"\u978b\u5b50","sports":"\u4f53\u80b2","stationery":"\u6587\u5177\u5e97","supermarket":"\u8d85\u5e02","video":"\u5f71\u50cf\u51fa\u79df\u5e97"},"sport":{"sports_centre":"\u4f53\u80b2\u4e2d\u5fc3","stadium":"\u4f53\u80b2\u573a","swimming":"\u6e38\u6cf3","swimming_pool":"\u6e38\u6cf3\u6c60"},"tourism":{"archaeological_site":"\u8003\u53e4\u7f51\u9875","arts_centre":"\u827a\u672f\u4e2d\u5fc3","artwork":"\u5de5\u827a\u54c1","attraction":"\u5438\u5f15\u529b","battlefield":"\u6218\u573a","beach":"\u6d77\u6ee9","beacon":"\u706f\u5854","castle":"\u57ce\u5821","cave_entrance":"\u6d1e\u7a74\u5165\u53e3","information":"\u65c5\u5ba2\u4fe1\u606f","memorial":"\u7eaa\u5ff5\u7269","theme_park":"\u4e3b\u9898\u516c\u56ed","tower":"\u5854\u697c","viewpoint":"\u89c2\u70b9"},"unknown":{"unknown":"\u672a\u77e5"}}},"date":{"formats":{"default":"%Y-%m-%d","short":"%b%d\u65e5","long":"%Y\u5e74%b%d\u65e5"},"day_names":["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],"abbr_day_names":["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],"month_names":[null,"\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],"abbr_month_names":[null,"1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],"order":["year","month","day"]},"time":{"formats":{"default":"%Y\u5e74%b%d\u65e5 %A %H:%M:%S %Z","short":"%b%d\u65e5 %H:%M","long":"%Y\u5e74%b%d\u65e5 %H:%M"},"am":"\u4e0a\u5348","pm":"\u4e0b\u5348"},"datetime":{"distance_in_words":{"half_a_minute":"\u534a\u5206\u949f","less_than_x_seconds":{"one":"\u4e0d\u5230\u4e00\u79d2","other":"\u4e0d\u5230 %{count} \u79d2"},"x_seconds":{"one":"\u4e00\u79d2","other":"%{count} \u79d2"},"less_than_x_minutes":{"one":"\u4e0d\u5230\u4e00\u5206\u949f","other":"\u4e0d\u5230 %{count} \u5206\u949f"},"x_minutes":{"one":"\u4e00\u5206\u949f","other":"%{count} \u5206\u949f"},"about_x_hours":{"one":"\u5927\u7ea6\u4e00\u5c0f\u65f6","other":"\u5927\u7ea6 %{count} \u5c0f\u65f6"},"x_days":{"one":"\u4e00\u5929","other":"%{count} \u5929"},"about_x_months":{"one":"\u5927\u7ea6\u4e00\u4e2a\u6708","other":"\u5927\u7ea6 %{count} \u4e2a\u6708"},"x_months":{"one":"\u4e00\u4e2a\u6708","other":"%{count} \u4e2a\u6708"},"about_x_years":{"one":"\u5927\u7ea6\u4e00\u5e74","other":"\u5927\u7ea6 %{count} \u5e74"},"over_x_years":{"one":"\u4e00\u5e74\u591a","other":"%{count} \u5e74\u591a"},"almost_x_years":{"one":"\u63a5\u8fd1\u4e00\u5e74","other":"\u63a5\u8fd1 %{count} \u5e74"}},"prompts":{"year":"\u5e74","month":"\u6708","day":"\u65e5","hour":"\u65f6","minute":"\u5206","second":"\u79d2"}},"activerecord":{"attributes":{"user":{"first_name":"\u540d"},"poi":{"name":"\u59d3\u540d","type":"\u79cd\u7c7b","website":"\u7f51\u9875","phone":"\u7535\u8bdd","address_street":"\u8857\u9053","address_housenumber":"\u6ca1\u6709","address_postcode":"\u90ae\u653f\u7f16\u7801","address_city":"\u57ce\u5e02"}},"errors":{"full_messages":{"format":"%{attribute} %{message}"},"messages":{"accepted":"\u5fc5\u987b\u662f\u53ef\u88ab\u63a5\u53d7\u7684","blank":"\u4e0d\u80fd\u4e3a\u7a7a\u5b57\u7b26","confirmation":"\u4e0e\u786e\u8ba4\u503c\u4e0d\u5339\u914d","empty":"\u4e0d\u80fd\u7559\u7a7a","equal_to":"\u5fc5\u987b\u7b49\u4e8e %{count}","even":"\u5fc5\u987b\u4e3a\u53cc\u6570","exclusion":"\u5df2\u9884\u5b9a","greater_than":"\u5fc5\u987b\u5927\u4e8e %{count}","greater_than_or_equal_to":"\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e %{count}","inclusion":"\u4e0d\u5305\u542b\u4e8e\u5217\u8868\u4e2d","invalid":"\u662f\u65e0\u6548\u7684","less_than":"\u5fc5\u987b\u5c0f\u4e8e %{count}","less_than_or_equal_to":"\u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e %{count}","not_a_number":"\u4e0d\u662f\u6570\u5b57","odd":"\u5fc5\u987b\u4e3a\u5355\u6570","record_invalid":"\u9a8c\u8bc1\u5931\u8d25: %{errors}","taken":"\u5df2\u7ecf\u88ab\u4f7f\u7528","too_long":"\u8fc7\u957f\uff08\u6700\u957f\u4e3a %{count} \u4e2a\u5b57\u7b26\uff09","too_short":"\u8fc7\u77ed\uff08\u6700\u77ed\u4e3a %{count} \u4e2a\u5b57\u7b26\uff09","wrong_length":"\u957f\u5ea6\u975e\u6cd5\uff08\u5fc5\u987b\u4e3a %{count} \u4e2a\u5b57\u7b26\uff09"},"models":{"user_session":{"email":"\u7535\u5b50\u90ae\u4ef6\u5730\u5740","password":"\u5bc6\u7801","remember_me":"\u4fdd\u6301\u767b\u5f55\u72b6\u6001"}},"template":{"body":"\u5982\u4e0b\u5b57\u6bb5\u51fa\u73b0\u9519\u8bef\uff1a","header":{"one":"\u6709 1 \u4e2a\u9519\u8bef\u53d1\u751f\u5bfc\u81f4\u300c%{model}\u300d\u65e0\u6cd5\u88ab\u4fdd\u5b58\u3002","other":"\u6709 %{count} \u4e2a\u9519\u8bef\u53d1\u751f\u5bfc\u81f4\u300c%{model}\u300d\u65e0\u6cd5\u88ab\u4fdd\u5b58\u3002"}}},"models":{"user":"\u4f7f\u7528\u8005"}},"application":{"require_no_user":{"notice":"\u60a8\u5df2\u7ecf\u767b\u5f55..."},"require_user":{"notice":"\u8981\u6d4f\u89c8\u6b64\u9875\u5fc5\u987b\u767b\u5f55"}},"breadcrumbs":{"node":{"create":"\u6dfb\u52a0\u65b0\u7684\u4f4d\u7f6e","edit":"\u7f16\u8f91\u5730\u70b9"},"root":"\u8f6e\u6905\u901a\u884c\u5730\u56fe"},"common":{"close":"\u5173\u95ed"},"errors":{"dynamic_format":"%{message}","format":"%{attribute} %{message}","messages":{"accepted":"\u5df2\u88ab\u63a5\u53d7","already_confirmed":"\u5df2\u7ecf\u786e\u8ba4","blank":"\u5df2\u586b\u5145","confirmation":"\u6ca1\u6709\u8fdb\u884c\u5339\u914d\u786e\u8ba4","empty":"\u5df2\u586b\u5145","equal_to":"\u5fc5\u987b\u51c6\u786e%{count}","even":"\u5fc5\u987b\u5e73\u5766","exclusion":"\u5df2\u9884\u5b9a","expired":"\u60a8\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u7533\u8bf7","greater_than":"\u5fc5\u987b\u5927\u4e8e%{count}","greater_than_or_equal_to":"\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e%{count}","inclusion":"\u65e0\u6548\u6570\u503c","invalid":"\u65e0\u6548","less_than":"\u5fc5\u987b\u5c11\u4e8e%{count}","less_than_or_equal_to":"\u5fc5\u987b\u4f4e\u4e8e\u6216\u7b49\u4e8e%{count}","not_a_number":"\u4e0d\u662f\u4e00\u4e2a\u6570\u5b57","not_an_integer":"\u5fc5\u987b\u662f\u6574\u6570","not_found":"\u6ca1\u6709\u627e\u5230","not_locked":"\u672a\u9501\u5b9a","odd":"\u5fc5\u987b\u4e3a\u5355\u6570","taken":"\u5df2\u7ecf\u88ab\u4f7f\u7528","too_long":"\u592a\u957f(\u4e0d\u80fd\u957f\u4e8e %{count} \u5b57\u7b26)","too_short":"\u592a\u77ed(\u4e0d\u5c11\u4e8e%{count} \u5b57\u7b26)","wrong_length":"\u957f\u5ea6\u975e\u6cd5\uff08\u5fc5\u987b\u4e3a %{count} \u4e2a\u5b57\u7b26\uff09"},"template":{"body":"\u4ee5\u4e0b\u533a\u57df\u51fa\u73b0\u4e86\u95ee\u9898\uff1a"}},"flash":{"actions":{"create":{"notice":"%{resource_name}\u5df2\u6210\u529f\u521b\u5efa"},"destroy":{"alert":"%{resource_name}\u4e0d\u80fd\u88ab\u79fb\u9664","notice":"%{resource_name}\u5df2\u6210\u529f\u5220\u9664"},"update":{"notice":"%{resource_name}\u5df2\u6210\u529f\u66f4\u65b0"}}},"form":{"show_fully_accessible_places":"\u8f6e\u6905\u901a\u9053","show_limited_accessible_places":"\u90e8\u5206\u8f6e\u6905\u901a\u9053","show_places_without_status":"\u672a\u77e5\u72b6\u6001","show_unaccessible_places":"\u975e\u8f6e\u6905\u901a\u9053"},"formtastic":{"hints":{"lat":"\u5c06\u5730\u56fe\u4e0a\u7684\u6807\u8bb0\u79fb\u52a8\u5230\u6b63\u786e\u4f4d\u7f6e","osm_username":"\u8fd8\u4e0d\u662f\u4f1a\u5458\uff1f<a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">\u9a6c\u4e0a\u5efa\u7acbOpenStreetMap\u5e10\u6237","password":"\uff08\u5982\u679c\u60a8\u4e0d\u60f3\u6539\u53d8\u8bf7\u4fdd\u7559\u7a7a\u767d\uff09","phone":"\u4f8b\u5982\uff1a+49 30 123456-78","website":"\u4f8b\u5982\uff1ahttp://www.example.com"},"labels":{"category":"\u76ee\u5f55\uff1a","city":"\u57ce\u5e02\uff1a","create":"\u521b\u5efa\u5730\u70b9","email":"\u7535\u5b50\u90ae\u4ef6","finish":"\u5b8c\u6210","housenumber":"\u6ca1\u6709\uff1a","lat":"\u7eac\u5ea6","lon":"\u7ecf\u5ea6","name":"\u59d3\u540d\uff1a","osm_password":"OSM\u5bc6\u7801","osm_username":"OSM\u5e10\u6237\u540d","password":"\u5bc6\u7801","password_confirmation":"\u91cd\u590d\u5bc6\u7801","phone":"\u7535\u8bdd","postcode":"\u90ae\u653f\u7f16\u7801","reset":"\u91cd\u7f6e","save":"\u4fdd\u5b58","street":"\u8857\u9053\uff1a","type":"\u79cd\u7c7b\uff1a","website":"\u7f51\u9875","wheelchair":"\u8f6e\u6905\u53ef\u901a\u8fc7\uff1f","wheelchair_description":"\u65e0\u969c\u788d\u8bf4\u660e\uff1a"},"titles":{"basic":"\u57fa\u672c\u6570\u636e","optional":"\u66f4\u591a\u4fe1\u606f<span class=\"addition\">(all fields are optional)</span>"}},"global":{"form_validation_error":"\u8bf7\u6ce8\u610f\u4e0b\u9762\u8868\u5355\u4e0a\u7684\u9519\u8bef"},"header":{"meta":{"description":"\u627e\u5230\u8f6e\u6905\u901a\u9053\u4f4d\u7f6e\uff0dwheelmap.org","homepage":"\u4e3b\u9875","keywords":"\u5bfb\u627e\u8f6e\u6905\u901a\u9053\u5730\u70b9\u7684\u6807\u5fd7","search":"\u641c\u7d22"},"navigation":{"blog":"\u535a\u5ba2","feedback":"\u53cd\u9988","home":"\u5f00\u59cb","how_to_add_a_place":"\u6211\u600e\u6837\u6dfb\u52a0\u4f4d\u7f6e","imprint":"\u7248\u672c\u8bf4\u660e","logged_in_as":"\u4ee5\uff1a\u767b\u5f55","login":"\u767b\u5f55","logout":"\u6ce8\u9500","newsletter":"\u7b80\u8baf","press":"\u51fa\u7248\u7269","suggestions":"\u5efa\u8bae","what_is_barrier_free":"\u201c\u8f6e\u6905\u901a\u9053\u201d\u662f\u4ec0\u4e48\u610f\u601d","what_is_wheelmap":"\u4ec0\u4e48\u662fwheelmap?"},"searchbar":{"add_place":"\u6dfb\u52a0\u53e6\u5916\u7684\u5730\u70b9","find":"\u627e\u5230","placeholder":"\u8bf8\u5982\u6d1b\u6749\u77f6\u5927\u9053\u7684\u65e5\u843d\u6216\u8005\u52c3\u5170\u767b\u5821\u7684\u5927\u95e8\u67cf\u6797","title_add_place":"\u73b0\u5728\u5728\u8fd9\u4e2a\u4f4d\u7f6e\u6dfb\u52a0\u65b0\u7684\u5730\u70b9"},"tagline":"\u8f6e\u6905\u5730\u56fe\u6807\u5fd7","title":"Wheelmap\uff0d\u627e\u5230\u8f6e\u6905\u901a\u9053"},"helpers":{"select":{"prompt":"\u8bf7\u9009\u62e9"},"submit":{"create":"\u65b0\u589e%{model}","submit":"\u50a8\u5b58%{model}","update":"\u66f4\u65b0%{model}"}},"home":{"index":{"filter":{"category":"\u9009\u62e9\u76ee\u5f55","wheelchair":"\u8f6e\u6905\u901a\u9053\uff1f"},"ie":{"action":{"ignore":"\u5ffd\u7565","upgrade":"\u66f4\u65b0\u6d4f\u89c8\u5668"},"warning":{"headline":"\u6211\u4eec\u5f88\u62b1\u6b49\uff01","message":"\u60a8\u4f7f\u7528\u7684\u662fInternet Explorer.Wheelmap\u8981\u6c42\u4f7f\u7528\u6807\u51c6-\u517c\u5bb9\u7684\u6d4f\u89c8\u5668\u624d\u80fd\u6b63\u5e38\u663e\u793a\u3002\u8bf7\u8003\u8651\u4f7f\u7528Firefox, Chrome, Safari or Opera\u7b49\u5176\u5b83\u6d4f\u89c8\u5668\u3002"}},"link":{"node":{"create":"\u6dfb\u52a0\u65b0\u5730\u70b9"}},"popup":{"form":{"limited":"\u90e8\u5206\u8f6e\u6905\u901a\u9053\u53ef\u7528","no":"\u975e\u8f6e\u6905\u901a\u9053","save":"\u66f4\u65b0","unknown":"\u672a\u77e5\u72b6\u6001","yes":"\u8f6e\u6905\u901a\u9053"},"help":"\u8f6e\u6905\u53ef\u901a\u8fc7\uff1f\uff08\u5e2e\u52a9\uff09","more":"\u66f4\u591a..."}}},"how?":"\u600e\u4e48\u6837","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"\u6240\u6709\u88ab\u9650\u5236\u7684\u8f6e\u6905\u901a\u9053%{type} in %{city} (%{count})"},"no":{"headline":"\u6240\u6709\u975e\u8f6e\u6905\u901a\u9053%{type} in %{city} (%{count})"},"unknown":{"headline":"\u6240\u6709%{type} in %{city} \u8f6e\u6905\u7684\u672a\u77e5\u72b6\u6001(%{count})"},"yes":{"headline":"\u6240\u6709\u8f6e\u6905\u901a\u9053%{type} in %{city} (%{count})"}}}},"layouts":{"application":{"banner":{"alt":"Sozialhelden.de\u7684\u65b9\u6848"}}},"node":{"address":{"city":"%{city} %{postcode}","street":"%{housenumber} %{street}"},"tags":{"phone":"\u7535\u8bdd\uff1a","website":"\u7f51\u9875"}},"nodes":{"create":{"flash":{"not_successfull":"\u51fa\u9519\u5566\uff0c\u60a8\u7684\u8f93\u5165\u4e0d\u6b63\u786e\u6216\u4e0d\u5b8c\u6574","successfull":"\u8c22\u8c22\uff0c\u60a8\u63d0\u4ea4\u7684\u4fe1\u606f\u5df2\u6210\u529f\u4fdd\u7559\u5e76\u5f88\u5feb\u4f1a\u5728\u7ebf\u663e\u793a"}},"edit":{"header":{"title":"\u7f16\u8f91\u5730\u70b9\uff1a%{node} | wheelmap.org"},"link":{"large_map":"&laquo;\u53d6\u6d88"}},"errors":{"default":"\u6709\u9519\u8bef\u53d1\u751f\u3002\u6211\u4eec\u5df2\u62a5\u544a\u8fd9\u4e2a\u95ee\u9898","not_authorized":"\u62b1\u6b49\uff0c\u9a8c\u8bc1\u5931\u8d25","not_available":"\u62b1\u6b49\uff0c\u6b64\u9875\u6682\u65f6\u4e0d\u53ef\u7528","not_existent":"\u62b1\u6b49\uff0c\u6b64\u5730\u70b9\u5df2\u65e0\u6548","not_found":"\u62b1\u6b49\uff0c\u6ca1\u6709\u627e\u5230\u9875\u9762","param_missing":"\u8bf7\u63d0\u4f9b\u641c\u7d22\u9879\u76ee"},"flash":{"authorize_wheelmap":"\u60a8\u9700\u8981\u4e00\u4e2aOpenStreetMap\u5e10\u6237\u6765\u4fee\u6539\u6570\u636e"},"new":{"header":{"title":"\u65b0\u5730\u70b9| wheelmap.org"},"link":{"large_map":"&laquo;\u53d6\u6d88"}},"node":{"link":{"claim":"\u60a8\u5728\u8fd9\u513f\u5de5\u4f5c\u5417\uff1f","edit_node":"\u7f16\u8f91\u4f4d\u7f6e","report_bug":"\u62a5\u544a\u4e00\u4e2a\u95ee\u9898"}},"show":{"header":{"title":"\u5730\u70b9\uff1a%{node} | wheelmap.org"},"link":{"back":"\u9000\u56de","large_map":"\u653e\u5927","listing":"\u6240\u6709\u5178\u578b\u5730\u70b9 '%{type}' in %{city}"},"show-in-osm":"OpenStreetMap"},"update":{"flash":{"not_successfull":"\u51fa\u9519\u5566\uff0c\u60a8\u7684\u8f93\u5165\u4e0d\u6b63\u786e\u6216\u8005\u4e0d\u5b8c\u6574","successfull":"\u8c22\u8c22\uff0c\u60a8\u63d0\u4ea4\u7684\u7533\u8bf7\u5df2\u6210\u529f\u4fdd\u7559\u5e76\u5f88\u5feb\u4f1a\u5728\u7ebf\u663e\u793a\u3002"}},"update_wheelchair":{"successfull":"\"%{name}\"\u7684\u72b6\u6001\u5df2\u66f4\u6539\u4e3a\"%{status}\u8f6e\u6905\u901a\u9053\"\u5e76\u5373\u523b\u5728\u7ebf"}},"number":{"currency":{"format":{"delimiter":",","format":"%u %n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"CN\u00a5"}},"format":{"delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false,"separator":"\u70b9"},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"\u5341\u4ebf","million":"\u767e\u4e07","quadrillion":"\u5343\u5146","thousand":"\u5343","trillion":"\u5146","unit":null}},"format":{"delimiter":null,"precision":1,"significant":"\u771f\u5b9e","strip_insignificant_zeros":"\u771f\u5b9e\u7684"},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"\u5b57\u8282"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":null}},"precision":{"format":{"delimiter":null}}},"oauth":{"application":{"connect":{"headline":"\u5982\u679c\u60a8\u8981\u5728wheelmap.org\u5efa\u7acb\u548c\u66f4\u6539\u4f4d\u7f6e\uff0c\u987b\u5148\u5c06\u60a8\u7684\u5e10\u6237\u8fde\u63a5\u5230'open street map'"}},"callback":{"notice":"\u60a8\u7684wheelmap\u5e10\u6237\u73b0\u5728\u5df2\u8fde\u63a5\u5230OpenStreetMap\u5e10\u6237%{user}."}},"or":"\u6216\u8005","place":{"one":"%{count}\u5730\u70b9","other":"%{count}\u4f4d\u7f6e"},"profile":{"edit":{"application":{"oauth":{"connected":"\u72b6\u6001\uff1a\u5df2\u8fde\u63a5","grant":"\u73b0\u5728\u8fde\u63a5","not_connected":"\u72b6\u6001\uff1a\u672a\u8fde\u63a5","revoke":"\u65ad\u5f00\u8fde\u63a5"}},"headline":"\u7f16\u8f91\u4e2a\u4eba\u8d44\u6599"}},"search":{"index":{"search":{"for":"\u641c\u7d22\"%{q}\"","not_found":"\u6ca1\u6709\u627e\u5230\u4f4d\u7f6e"}}},"splash":{"countline":"%{count}\u5730\u70b9\u5df2\u88ab\u6807\u8bb0","headline":"\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u6dfb\u52a0\u8f6e\u6905\u901a\u9053\u5730\u70b9","start":"\u5f00\u59cb","step1":"\u8bf7\u70b9\u51fb\u60a8\u77e5\u9053\u7684\u5730\u70b9","step2":"\u6807\u8bb0\u5e76\u70b9\u51fb\u4fdd\u7559","step3":"\u5c31\u662f\u8fd9\u6837\uff01\u65e0\u9700\u6ce8\u518c","what_is_wheelmap":"\u4ec0\u4e48\u662fwheelmap?"},"statistics":"\u7edf\u8ba1","support":{"array":{"last_word_connector":"\u548c ","sentence_connector":"\u548c","skip_last_comma":"\u771f\u5b9e\u7684","two_words_connector":" \u548c ","words_connector":", "},"select":{"prompt":"\u8bf7\u9009\u62e9"}},"user_sessions":{"create":{"activation":{"notice":"\u60a8\u7684\u5e10\u6237\u5df2\u88ab\u6fc0\u6d3b"},"error":{"notice":"\u90ae\u7bb1\u5730\u5740\u548c\u5bc6\u7801\u4e0d\u7b26\u5408"},"notice":"\u60a8\u5df2\u767b\u5165"},"destroy":{"notice":"\u518d\u89c1\uff0c\u5feb\u70b9\u56de\u6765\u554a\uff01"},"new":{"email":"\u7535\u5b50\u90ae\u4ef6\u5730\u5740","login":"\u767b\u5f55","login_with_twitter":"\u4f7f\u7528\u63a8\u7279\u767b\u5f55","password":"\u5bc6\u7801","remember_me":"\u4fdd\u7559\u767b\u5f55\u72b6\u6001"}},"wheelchairstatus":{"limited":"\u90e8\u5206\u8f6e\u6905\u901a\u9053\u53ef\u7528","no":"\u975e\u8f6e\u6905\u901a\u9053","unknown":"\u672a\u77e5\u72b6\u6001","yes":"\u8f6e\u6905\u901a\u9053"},"wheelmap":{"footer":{"a_project_of":"...\u7684\u9879\u76ee","based_on":"\u57fa\u4e8e","become_a_supporter":"\u6210\u4e3a\u8d5e\u52a9\u8005","main_supporter":"\u4e3b\u8981\u652f\u6301\u8005"},"itunes":{"alt":"\u5e94\u7528\u5546\u5e97\u6807\u5fd7","title":"\u73b0\u5728\u4e0b\u8f7diPhone\u5e94\u7528\u8f6f\u4ef6"},"logo":{"alt":"Wheelmap \u6807\u5fd7\uff0d\u627e\u5230\u8f6e\u6905\u901a\u9053\u7684\u5730\u70b9","title":"Wheelmap \u6807\u5fd7\uff0d\u627e\u5230\u8f6e\u6905\u901a\u9053\u7684\u5730\u70b9"},"what_is":{"fully_accessible":"\u5165\u53e3\u6ca1\u6709\u53f0\u9636\uff0c\u6240\u6709\u623f\u95f4\u6ca1\u6709\u53f0\u9636\uff0c\u5395\u6240\u53ef\u901a\u8fc7","limited_accessible":"\u5165\u53e3\u6709\u53f0\u9636\uff08\u6700\u9ad87\u5398\u7c73\uff09\uff0c\u5927\u90e8\u5206\u623f\u95f4\u6ca1\u6709\u53f0\u9636\u3002\u5395\u6240\u4e0d\u80fd\u901a\u8fc7","not_accessible":"\u5165\u53e3\u5f88\u5feb\u5230\u8fbe\uff0c\u623f\u95f4\u4e0d\u80fd\u901a\u8fc7","unknown_accessible":"\u6807\u8bb0\u5730\u70b9\u5e2e\u52a9"}},"will_paginate":{"next_label":"\u5f80\u540e&#8594;","page_entries_info":{"multi_page":"\u5b8c\u6574\u663e\u793a%{model} %{from} - %{to} of %{count}","multi_page_html":"\u663e\u793a %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> \u603b\u8ba1","single_page":{"one":"\u663e\u793a1 %{model}","other":"\u663e\u793a\u5168\u90e8%{count} %{model}","zero":"%{model}\u6ca1\u627e\u5230"},"single_page_html":{"one":"\u663e\u793a<b>1</b> %{model}","other":"\u663e\u793a<b>all&nbsp;%{count}</b> %{model}","zero":"\u6ca1\u627e\u5230%{model}"}},"page_gap":"\u53d6hellip\u53d8\u91cf\u5730\u5740","previous_label":"&#8592;\u5f80\u524d"}}};