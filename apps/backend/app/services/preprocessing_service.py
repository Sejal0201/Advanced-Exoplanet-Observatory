import numpy as np
import pandas as pd


class PreprocessingService:

    def preprocess(
        self,
        dataframe: pd.DataFrame,
    ):

        report = {}

        report["rows_before"] = len(dataframe)

        report["columns"] = list(dataframe.columns)

        report["missing_values"] = (
            dataframe.isnull()
            .sum()
            .to_dict()
        )

        report["duplicate_rows"] = int(
             dataframe.duplicated().sum()
       )

        dataframe = dataframe.drop_duplicates()

        dataframe = dataframe.fillna(
            dataframe.median(
                numeric_only=True
            )
        )

        report["rows_after"] = len(dataframe)

        stats = dataframe.describe().to_dict()

        for column in stats:
            for key in stats[column]:
                stats[column][key] = float(
                    stats[column][key]
            )

        report["statistics"] = stats

        return dataframe, report