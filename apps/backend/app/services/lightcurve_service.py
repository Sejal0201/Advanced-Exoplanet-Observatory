import pandas as pd


class LightCurveService:

    REQUIRED_COLUMNS = [
        "time",
        "flux",
    ]

    OPTIONAL_COLUMNS = [
        "flux_error",
    ]

    def analyze(
        self,
        dataframe: pd.DataFrame,
    ):

        columns = [column.lower() for column in dataframe.columns]

        missing = [
            column
            for column in self.REQUIRED_COLUMNS
            if column not in columns
        ]

        if missing:
            return {
                "valid": False,
                "reason": f"Missing required columns: {missing}",
            }

        time_column = dataframe.columns[
            columns.index("time")
        ]

        flux_column = dataframe.columns[
            columns.index("flux")
        ]

        report = {
            "valid": True,

            "rows": len(dataframe),

            "time_range": {
                "start": float(dataframe[time_column].min()),
                "end": float(dataframe[time_column].max()),
            },

            "duration": float(
                dataframe[time_column].max()
                - dataframe[time_column].min()
            ),

            "flux": {
                "minimum": float(dataframe[flux_column].min()),
                "maximum": float(dataframe[flux_column].max()),
                "mean": float(dataframe[flux_column].mean()),
                "std": float(dataframe[flux_column].std()),
            },
        }

        return report