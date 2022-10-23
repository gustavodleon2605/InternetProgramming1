<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet type="text/xsl" href="textbook.xsl"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>My Book Collection</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th style="text-align:left">Title</th>
                        <th style="text-align:left">Author First name</th>
                        <th style="text-align:left">Author Last name</th>
                        <th style="text-align:left">Publisher name</th>
                        <th style="text-align:left">Publisher website</th>
                        <th style="text-align:left">Year of Publication</th>
                        <th style="text-align:left">ISBN</th>
                        <th style="text-align:left">book website</th>
                        <th style="text-align:left">edition</th>
                        <th style="text-align:left">cover type</th>

                    </tr>
                    <xsl:for-each select="textbooks/textbook">
                        <tr>
                            <td><xsl:value-of select="title"/></td>
                            <td><xsl:value-of select="authors/author/firstName"/></td>
                            <td><xsl:value-of select="authors/author/lastName"/></td>
                            <td><xsl:value-of select="publisher/name"/></td>
                            <td><xsl:value-of select="publisher/website"/></td>
                            <td><xsl:value-of select="Year-of-Publication"/></td>
                            <td><xsl:value-of select="ISBN"/></td>
                            <td><xsl:value-of select="book-specific-website"/></td>
                            <td><xsl:value-of select="edition"/></td>
                            <td><xsl:value-of select="cover-type"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>