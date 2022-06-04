from typing import List

test_params = 'price[currency]<=>PLN<br>m<=>41.28<br>rooms_num<=>2<br>market<=>primary<br>building_type<=>block<br>floor_no<=>floor_3<br>building_floors_num<=>3<br>building_material<=>brick<br>windows_type<=>plastic<br>heating<=><br>build_year<=><br>construction_status<=>to_completion<br>rent<=>price<br>rent<=><br>rent[currency]<=>PLN<br>building_ownership<=>full_ownership<br>free_from<=><br>media_types<=>cable-television<->internet<->phone<br>security_types<=>closed_area<->entryphone<br>equipment_types<=>0<br>extras_types<=>balcony<->basement<->garage<->lift<br>'


class ParamsParser():
    def __init__(self, params: str):
        self.params = params

    def parse(self):
        lines = self.params.split('<br>')
        entries = [ParamsParser.process_line(line) for line in lines]

        params_dict = {key: value for [key, value] in entries}

        return params_dict

    def process_line(line: str) -> str or List(str):
        [key, value] = ParamsParser.unpack_entries(
            line.split('<=>'))

        parsed_value = ParamsParser.parse_value(value)

        return [key, parsed_value]

    def parse_value(value: str) -> str or List(str):
        values = value.split('<->')

        if (len(values) == 1):
            return value

        return values

    def unpack_entries(entries):
        if (len(entries) > 1):
            return entries
        elif (len(entries) == 1):
            return [entries[0], '']
        else:
            return ['', '']


parser = ParamsParser(test_params)
print(parser.parse())
