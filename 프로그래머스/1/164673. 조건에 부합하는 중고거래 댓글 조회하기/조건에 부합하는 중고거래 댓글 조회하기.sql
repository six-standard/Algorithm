-- 코드를 입력하세요
SELECT 
  ugb.TITLE, 
  ugb.BOARD_ID, 
  ugr.REPLY_ID, 
  ugr.WRITER_ID, 
  ugr.CONTENTS, 
  date_format(ugr.CREATED_DATE, "%Y-%m-%d") as "CREATED_DATE" 
from USED_GOODS_BOARD ugb 
  join USED_GOODS_REPLY ugr 
  on ugb.BOARD_ID = ugr.BOARD_ID 
  where ugb.CREATED_DATE >= '2022-10-01' and ugb.CREATED_DATE <= '2022-10-31' 
  order by ugr.created_date asc, ugb.title asc