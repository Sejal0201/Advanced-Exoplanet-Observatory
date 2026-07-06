import numpy as np
import pandas as pd


class TransitDetectionService:

    def detect(
        self,
        dataframe: pd.DataFrame,
    ):

        columns = [column.lower() for column in dataframe.columns]

        time_column = dataframe.columns[
            columns.index("time")
        ]

        flux_column = dataframe.columns[
            columns.index("flux")
        ]

        flux = dataframe[flux_column]

        time = dataframe[time_column]

        mean_flux = flux.mean()

        std_flux = flux.std()

        threshold = mean_flux - (2 * std_flux)

        candidate_points = dataframe[
            flux < threshold
        ]

        candidates = []

        for _, row in candidate_points.iterrows():

            candidates.append(
                {
                    "time": float(row[time_column]),
                    "flux": float(row[flux_column]),
                }
            )

        confidence = int(
            min(
                len(candidates) * 10,
                100,
            )
        )

        return {
            "candidate_count": int(len(candidates)),
            "threshold": float(threshold),
            "confidence": confidence,
            "candidates": candidates[:20],
        }