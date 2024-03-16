# Call with python3 setup.py sdist

from setuptools import setup, find_packages

packages = find_packages()
print(packages)
setup(
    name='amazon-scraping',
    version='0.1',
    description='Scraping utilities to retrieve Amazon order history and other account information',
    author='Jacques Morel',
    author_email='',
    license='MIT',
    url='https://github.com/jacmorel/amazon-scraping',
    classifiers=[
        # Optional (refer: https://pypi.org/classifiers/)
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'Topic :: Software Development',
        'Programming Language :: Python :: 3.12',
    ],
    packages=packages,
    install_requires=[
    ],
    data_files=[('README', ['README.md'])],
    python_requires='>=3.6, <4',
)
