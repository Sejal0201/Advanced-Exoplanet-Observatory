from pathlib import Path

import pandas as pd
from astropy.io import fits


def parse_dataset(path: str):

    extension = Path(path).suffix.lower()

    if extension == ".csv":

        df = pd.read_csv(path)

        return {
            "dataframe": df,
            "metadata": {
                "rows": len(df),
                "columns": list(df.columns),
                "preview": df.head(5).to_dict(
                    orient="records"
                ),
            },
        }

    if extension == ".txt":

        df = pd.read_csv(
            path,
            sep=None,
            engine="python",
        )

        return {
            "dataframe": df,
            "metadata": {
                "rows": len(df),
                "columns": list(df.columns),
                "preview": df.head(5).to_dict(
                    orient="records"
                ),
            },
        }

    if extension == ".fits":

        with fits.open(path) as hdul:

            data = hdul[1].data

            df = pd.DataFrame(data)

            return {
                "dataframe": df,
                "metadata": {
                    "rows": len(df),
                    "columns": list(df.columns),
                    "preview": df.head(5).to_dict(
                        orient="records"
                    ),
                },
            }

    return None