# amazon-scraping

## Installation

```shell
python3 -m venv .amazon-scraping     # create virtual environment .amazon-scraping
source .amazon-scraping/bin/activate # activate environment
pip3 install -r requirements.txt     # install required packages
python3 setup.py sdist               # create source distribution
```
Once finished

```shell
deactivate
```
## Execution

```shell
export PYTHONPATH=$PYTHONPATH:./src
python3 main.py --help
```