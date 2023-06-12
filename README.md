# formular-api

Import database. 
Dẫn đến folder dump sau đó dùng lệnh mongorestore để import database .
fomular1-api\dump> mongorestore /.

Tạo project bằng lệnh npm init
Cài đặt các module : express, typescripts, mongoose.

Tạo các model liên quan theo database:

-Load All Season 
Method GET  127.0.0.1:8888/season.

-Get all Constructors or Drivers or Races.

Method GET  127.0.0.1:8888/season/value/?year=2023&type=races ( type = 'races' | 'drivers' | 'teans' ).

Các dữ liệu constructors , drivers, races qua từng năm đều đc lây thông qua field year và raceId trong bảng Race và Result.

Drivers: 
 - Get đc mảng raceId trong năm 2023, sau đó dùng mảng raceId để lấy danh sách các driver trong bảng driver_standing.
 - Get kết quả của các drivers trong năm bằng mảng raceId và mảng driverId trong bảng result.

Constructors:
 - Get đc mảng raceId trong năm 2023, sau đó dùng mảng raceId để lấy danh sách các driver trong bảng constructor_standing.
 - Get kết quả của các constructors trong năm bằng mảng raceId và mảng driverId trong bảng result.

Races:
 - Get đc mảng circuitId trong trong năm 2023 bảng Race.
 - Get toàn bộ các circuit trong năm 2023 trong bảng circuit bằng mảng circuitId.
 - Get kết quả thắng cuộc của driver và constructor của từng circuit.


- Get one Constructors or Drivers or Races

Method GET  127.0.0.1:8888/season/filter/?year=2023&type=races&value=bahrain .
type = 'races' | 'drivers' | 'teans'.
value = circuitRef | driverRef | constructorRef.

Get mảng raceId theo năm 2022.

Driver:
 - Get driverId theo value driverRef trong bảng driver.
 - Get kết quả của driver bằng mảng raceId và driverId (circuit, date, constructor, race position, points).

Constructor:
 - Get constructorId theo value constructorRef trong bảng constructor.
 - Get kết quả của constructor bằng mảng raceId và constructorId.

Race:
 - Get circuitId theo value circuitRef trong bảng circuit.
 - Get raceId theo năm và circuitId trong bảng race.
 - Get kết quả trong bảng result,pitstop, qualifying bằng raceId





